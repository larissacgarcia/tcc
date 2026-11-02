import React from 'react';
import { Stethoscope, Scale, Award, Heart, CheckCircle2, Lock } from 'lucide-react';

export const NursingAndRightsView: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-sky-800 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-teal-100">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Enfermagem & Legislação em Saúde</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            O Papel da Enfermagem & Seus Direitos Reprodutivos no SUS
          </h2>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            A enfermagem brasileira é a espinha dorsal da Atenção Primária à Saúde. Conheça as competências das enfermeiras na sua UBS, o respaldo das resoluções do COFEN e as recentes conquistas legais que garantem a autonomia do seu corpo.
          </p>
        </div>
      </div>

      {/* Nursing Consultation & DIU Insertion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>Resoluções COFEN nº 690/2022 e 714/2023</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            A Consulta de Enfermagem e a Inserção de DIU na UBS
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            No Brasil, a Lei do Exercício Profissional da Enfermagem (Lei Federal nº 7.498/1986) e os protocolos do Ministério da Saúde autorizam expressamente enfermeiras(os) a realizar a <strong>Consulta de Enfermagem em Saúde Sexual e Reprodutiva</strong>.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Além do acolhimento com escuta humanizada, as(os) enfermeiras(os) capacitadas(os) são responsáveis pela <strong>indicação clínica, inserção, revisão e retirada do DIU de Cobre</strong> no próprio consultório da UBS, com segurança comprovada e acolhimento livre de julgamentos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="bg-white rounded-2xl p-4 border border-teal-200 shadow-xs space-y-1">
              <strong className="text-slate-900 block font-bold text-sm text-teal-900">O que a enfermeira faz na consulta:</strong>
              <ul className="text-slate-600 space-y-1 list-disc pl-4">
                <li>Escuta atenta dos seus planos de vida e histórico</li>
                <li>Verificação de pressão arterial e cálculo de risco</li>
                <li>Realização de testes rápidos na hora</li>
                <li>Prescrição de anticoncepcionais orais e injetáveis</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-teal-200 shadow-xs space-y-1">
              <strong className="text-slate-900 block font-bold text-sm text-teal-900">Inserção de DIU de Cobre:</strong>
              <ul className="text-slate-600 space-y-1 list-disc pl-4">
                <li>Ambiente limpo, acolhedor e seguro na UBS</li>
                <li>Uso de instrumentos esterilizados e técnica asséptica</li>
                <li>Orientação imediata de cuidados pós-inserção</li>
                <li>Agendamento do retorno de acompanhamento</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nursing Highlights Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-6 sm:p-7 border border-teal-200 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-md">
            <Heart className="w-6 h-6" />
          </div>

          <h4 className="text-lg font-bold text-slate-900">
            Acolhimento HumanizaSUS
          </h4>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            "Atenção integral à saúde da mulher não é apenas entregar um medicamento: é respeitar a história, as crenças, os sentimentos e as decisões de cada mulher sobre sua fertilidade e sexualidade."
          </p>

          <div className="border-t border-teal-200/80 pt-3 text-xs text-teal-900 font-semibold space-y-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Direito a acompanhante em consultas e procedimentos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Privacidade física durante exames clínicos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Linguagem acessível e sem jargões difíceis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reproductive Rights & New Law 14.443/2022 */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 uppercase tracking-wider bg-rose-50 px-3 py-1 rounded-full border border-rose-100 mb-2">
            <Scale className="w-3.5 h-3.5 text-rose-600" />
            <span>Marco Histórico dos Direitos Reprodutivos</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            A Nova Lei da Laqueadura e Vasectomia (Lei Federal nº 14.443/2022)
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Sancionada para garantir de forma definitiva que a decisão sobre cirurgias definitivas pertença à própria pessoa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-100 space-y-2">
            <span className="text-2xl font-black text-rose-700 block">1. Fim do Aval</span>
            <strong className="text-slate-900 block text-sm font-bold">Sem consentimento de marido/parceiro</strong>
            <p className="text-xs text-slate-600 leading-relaxed">
              Foi revogado o artigo que exigia autorização expressa do cônjuge para a laqueadura ou vasectomia. Nenhuma UBS ou hospital pode exigir assinatura de marido.
            </p>
          </div>

          <div className="bg-sky-50/60 rounded-2xl p-5 border border-sky-100 space-y-2">
            <span className="text-2xl font-black text-sky-700 block">2. Idade Mínima</span>
            <strong className="text-slate-900 block text-sm font-bold">Reduzida para 21 anos</strong>
            <p className="text-xs text-slate-600 leading-relaxed">
              A idade mínima para realizar a cirurgia pelo SUS caiu de 25 para 21 anos. E quem já possui pelo menos 2 filhos vivos pode realizar em qualquer idade.
            </p>
          </div>

          <div className="bg-teal-50/60 rounded-2xl p-5 border border-teal-100 space-y-2">
            <span className="text-2xl font-black text-teal-700 block">3. Durante o Parto</span>
            <strong className="text-slate-900 block text-sm font-bold">Laqueadura no parto cesárea</strong>
            <p className="text-xs text-slate-600 leading-relaxed">
              A nova lei permite realizar a laqueadura durante o parto, desde que a gestante manifeste o desejo formal com antecedência mínima de 60 dias no pré-natal da UBS.
            </p>
          </div>
        </div>
      </div>

      {/* Confidentiality for Adolescents and Young Women */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-300">
            <Lock className="w-3.5 h-3.5" />
            <span>Sigilo Médico e de Enfermagem</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
            Adolescentes e Jovens têm Direito ao Atendimento Sigiloso no SUS
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            De acordo com o Estatuto da Criança e do Adolescente (ECA), o Código de Ética dos Profissionais de Enfermagem e as diretrizes do Ministério da Saúde, adolescentes podem comparecer sozinhas à UBS, receber orientação sobre métodos contraceptivos, retirar preservativos e realizar testes rápidos de gravidez e ISTs com <strong>garantia legal de sigilo profissional</strong>.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs text-slate-200 space-y-1.5 shrink-0 w-full md:w-auto">
          <span className="font-bold text-white block">Canais de Apoio e Denúncia:</span>
          <p>Disque Saúde: <strong>136 (SUS)</strong></p>
          <p>Central de Atendimento à Mulher: <strong>180</strong></p>
          <p>Disque Direitos Humanos: <strong>100</strong></p>
        </div>
      </div>
    </div>
  );
};
