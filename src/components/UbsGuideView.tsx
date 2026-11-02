import React, { useState } from 'react';
import { SUS_LOCATIONS, UBS_DISCOVERY_TIPS } from '../data/susUbsGuide';
import { MapPin, Stethoscope, Clock, FileCheck, Phone, Smartphone, Compass, ExternalLink, CheckCircle2, ChevronRight, Heart } from 'lucide-react';

export const UbsGuideView: React.FC = () => {
  const [selectedMethodId, setSelectedMethodId] = useState<string>('diu-cobre-loc');
  const [simulatedCep, setSimulatedCep] = useState('');
  const [cepSearched, setCepSearched] = useState(false);

  const selectedLocation = SUS_LOCATIONS.find((l) => l.id === selectedMethodId) || SUS_LOCATIONS[0];

  const handleSimulateCep = (e: React.FormEvent) => {
    e.preventDefault();
    if (simulatedCep.trim().length >= 5) {
      setCepSearched(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-800 to-emerald-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-teal-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>Rede de Atenção Primária à Saúde (APS)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Onde Aplicar e Como Fazer seu Procedimento na UBS
          </h2>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            Seja para tomar sua injeção mensal, colocar o DIU de Cobre, pegar camisinhas ou iniciar o processo de laqueadura, a sua Unidade Básica de Saúde (Posto de Saúde) é a porta de entrada acolhedora e 100% gratuita do SUS.
          </p>
        </div>
      </div>

      {/* Interactive Method Procedure Selector */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-teal-600" />
            <span>Escolha o método para ver a sala e os passos na UBS:</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Clique em cada procedimento para conferir o local específico dentro do posto, profissionais responsáveis e documentos.
          </p>
        </div>

        {/* Procedure Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {SUS_LOCATIONS.map((loc) => {
            const isSelected = selectedMethodId === loc.id;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedMethodId(loc.id)}
                className={`p-3 rounded-2xl text-left font-bold text-xs transition-all border flex flex-col justify-between min-h-[70px] ${
                  isSelected
                    ? 'bg-teal-700 text-white border-teal-800 shadow-md ring-2 ring-teal-500/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>{loc.methodName}</span>
                <span className={`text-[10px] mt-1 font-semibold ${isSelected ? 'text-teal-200' : 'text-slate-400'}`}>
                  Ver fluxo →
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Procedure Details Card */}
        <div className="bg-white rounded-3xl border border-teal-200 shadow-md p-6 sm:p-8 space-y-6 animate-in fade-in">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
              Guia de Procedimento do SUS
            </span>
            <h4 className="text-2xl font-extrabold text-slate-900">
              {selectedLocation.methodName}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Target room & Professional */}
            <div className="space-y-4">
              <div className="bg-teal-50/70 rounded-2xl p-4 border border-teal-100 space-y-1">
                <span className="text-xs font-bold text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  Local exato na UBS:
                </span>
                <p className="text-sm font-semibold text-slate-800">{selectedLocation.targetLocation}</p>
              </div>

              <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-100 space-y-1">
                <span className="text-xs font-bold text-sky-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-sky-600" />
                  Quem realiza o atendimento:
                </span>
                <p className="text-sm font-semibold text-slate-800">{selectedLocation.professionalRole}</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-500" />
                  Como agendar e tempo estimado:
                </span>
                <p className="text-xs sm:text-sm text-slate-700">{selectedLocation.howToSchedule}</p>
                <p className="text-xs text-teal-800 font-bold mt-1">Estimativa: {selectedLocation.estimatedWaitTime}</p>
              </div>
            </div>

            {/* Documents & Tips */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  Documentos necessários na recepção:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {selectedLocation.documentsRequired.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 space-y-2">
                <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Dicas práticas para o dia do atendimento:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {selectedLocation.tipsForVisit.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold shrink-0">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Nursing Role Highlight */}
          <div className="bg-gradient-to-r from-teal-50 via-white to-pink-50 p-5 rounded-2xl border border-teal-200/80 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs font-bold uppercase tracking-wider text-teal-900 block mb-1">
                Acolhimento da Enfermagem na Atenção Básica
              </strong>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedLocation.nursingRoleDetails}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Find your reference UBS (Territoriality & Apps) */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-teal-600" />
            <span>Como Saber Qual é a sua UBS de Referência?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            No SUS, cada rua e cada bairro pertencem a uma UBS específica (território da Equipe de Saúde da Família).
          </p>
        </div>

        {/* Discovery Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UBS_DISCOVERY_TIPS.map((tip, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  {tip.icon === 'Smartphone' && <Smartphone className="w-5 h-5" />}
                  {tip.icon === 'Phone' && <Phone className="w-5 h-5" />}
                  {tip.icon === 'MapPin' && <MapPin className="w-5 h-5" />}
                  {tip.icon === 'Compass' && <Compass className="w-5 h-5" />}
                </div>
                <h4 className="text-sm font-bold text-slate-900">{tip.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{tip.description}</p>
              </div>

              {tip.actionUrl ? (
                <a
                  href={tip.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 text-xs font-bold px-3 py-2.5 rounded-xl transition-colors"
                >
                  <span>{tip.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-[11px] text-teal-800 font-bold bg-teal-50 px-2.5 py-1.5 rounded-xl border border-teal-100 text-center">
                  {tip.actionText}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Territory / CEP Guidance Tool */}
        <div className="bg-gradient-to-r from-sky-50 via-white to-teal-50 rounded-3xl p-6 sm:p-7 border border-sky-200/80 space-y-4">
          <div className="max-w-xl space-y-1">
            <h4 className="text-base font-bold text-slate-900">
              Simulador de Acesso Territorial por CEP ou Bairro
            </h4>
            <p className="text-xs text-slate-600">
              Digite seu CEP para receber a orientação exata de como se dirigir à sua unidade e se cadastrar na Estratégia de Saúde da Família.
            </p>
          </div>

          <form onSubmit={handleSimulateCep} className="flex flex-col sm:flex-row gap-2 max-w-md">
            <input
              type="text"
              value={simulatedCep}
              onChange={(e) => setSimulatedCep(e.target.value)}
              placeholder="Digite seu CEP (ex: 01310-100)"
              className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              Consultar Orientações
            </button>
          </form>

          {cepSearched && (
            <div className="bg-white rounded-2xl p-4 border border-teal-200 space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Orientações para o seu CEP:</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                1. Sua rua é coberta por uma <strong>Unidade Básica de Saúde (UBS)</strong> do seu distrito de saúde municipal.<br />
                2. Leve um comprovante de residência (conta de luz, água ou correspondência em seu nome ou de familiares) e seu documento de identidade com foto.<br />
                3. Na recepção da UBS, diga: <em>"Gostaria de me cadastrar na equipe de Saúde da Família e agendar acolhimento em saúde reprodutiva."</em><br />
                4. O cadastro é feito na hora e você já pode sair com consulta agendada ou ser acolhida no mesmo dia!
              </p>
              <div className="pt-2 flex gap-2">
                <a
                  href="https://meususdigital.saude.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
                >
                  Abrir Mapa de Postos no Meu SUS Digital <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
