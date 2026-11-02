// Criptografia militar AES-GCM 256-bit com derivação PBKDF2 (100.000 iterações)
// O token do GitHub fica armazenado exclusivamente como cifra matemática indecifrável.
// Apenas a senha correta (acolhemulher2026) consegue decifrar o token na memória do navegador.

export const ENCRYPTED_PAT_BUNDLE = {
  salt: "Rxe9rT/dHA5I1K8kwcfd8w==",
  iv: "yrAZ34b5VkSdy0H+",
  tag: "ClLmw7FhuTWDihbRMG0XLw==",
  data: "+RNQM82V3BDly61KAa0lDgXTQ67DgW4LkbEy5LRTMM7SE/nXsk7OJEnPD6XZYP0xfYZpWehqMsU9fe14MdSFtRXObWR8ftQzBYy87sL6MB6J/mpH6aOnmGOvjYEV"
};

function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decryptPatWithPassword(password: string): Promise<string | null> {
  if (typeof window === 'undefined' || !window.crypto || !window.crypto.subtle) {
    return null;
  }

  try {
    const enc = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      enc.encode(password.trim()),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );

    const saltBytes = base64ToUint8Array(ENCRYPTED_PAT_BUNDLE.salt);
    const ivBytes = base64ToUint8Array(ENCRYPTED_PAT_BUNDLE.iv);
    const tagBytes = base64ToUint8Array(ENCRYPTED_PAT_BUNDLE.tag);
    const dataBytes = base64ToUint8Array(ENCRYPTED_PAT_BUNDLE.data);

    // No WebCrypto AES-GCM, o ciphertext e a tag de autenticação devem ser concatenados
    const combined = new Uint8Array(dataBytes.length + tagBytes.length);
    combined.set(dataBytes, 0);
    combined.set(tagBytes, dataBytes.length);

    const derivedKey = await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: saltBytes as unknown as BufferSource,
        iterations: 100000,
        hash: 'SHA-256'
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );

    const decryptedBuffer = await window.crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: ivBytes as unknown as BufferSource
      },
      derivedKey,
      combined as unknown as BufferSource
    );

    const decryptedToken = new TextDecoder().decode(decryptedBuffer);
    if (decryptedToken.startsWith('github_pat_') || decryptedToken.startsWith('ghp_')) {
      return decryptedToken;
    }
    return null;
  } catch {
    // Senha incorreta ou falha de autenticação criptográfica
    return null;
  }
}
