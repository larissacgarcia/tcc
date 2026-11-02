import React from 'react';
import { IST_SERVICES } from '../data/istEducation';
import { ShieldCheck, Activity, Clock, Pill, Syringe, Heart, AlertTriangle } from 'lucide-react';

export const IstEducationView: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-rose-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-purple-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Educação em Saúde & Prevenção Combinada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Dupla Proteção & Prevenção de ISTs no SUS
          </h2>
          <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
            Cuidar da sua fertilidade e da sua saúde sexual andam de mãos dadas. Entenda o que é a Dupla Proteção, como funcionam os testes rápidos de 15 minutos e como ter acesso gratuito a profilaxias de urgência (PEP) e contínuas (PrEP).
          </p>
        </div>
      </div>

      {/* Services Grid (Dupla Proteção, Testes Rápidos, PEP, PrEP, Vacinas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {IST_SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-indigo-200 transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-100">
                  {srv.badge}
                </span>
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  {srv.iconName === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                  {srv.iconName === 'Activity' && <Activity className="w-5 h-5" />}
                  {srv.iconName === 'Clock' && <Clock className="w-5 h-5" />}
                  {srv.iconName === 'Pill' && <Pill className="w-5 h-5" />}
                  {srv.iconName === 'Syringe' && <Syringe className="w-5 h-5" />}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">{srv.title}</h3>
                <p className="text-xs text-indigo-900 font-semibold mt-0.5">{srv.subtitle}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {srv.description}
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
                  Informações Cruciais do Ministério da Saúde:
                </span>
                <ul className="space-y-1 text-xs text-slate-700">
                  {srv.criticalDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 flex items-center gap-2">
              <strong className="text-slate-900">Como acessar:</strong>
              <span>{srv.howToGet}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Special Practical Guide: Preservativos & Lubrificantes no SUS */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl p-6 sm:p-8 border border-purple-200/80 space-y-6">
        <div className="max-w-2xl space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wider">
            <Heart className="w-4 h-4 text-purple-600" />
            <span>Guia Prático de Autonomia Feminina</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Você já experimentou o Preservativo Interno (Feminino)?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Distribuído gratuitamente no SUS, ele coloca a decisão 100% nas suas mãos. Não depende de negociação com a parceria e pode ser colocado até 8 horas antes da relação sexual.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-white rounded-2xl p-4 border border-purple-100 space-y-1.5">
            <strong className="text-purple-950 font-bold block text-sm">1. Sem Látex & Muito Macio</strong>
            <p className="text-slate-600">Feito de borracha de nitrila ou poliuretano, é ideal para quem tem alergia ao látex da camisinha masculina e não esquenta.</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 space-y-1.5">
            <strong className="text-purple-950 font-bold block text-sm">2. Mais Proteção da Vulva</strong>
            <p className="text-slate-600">O anel externo cobre parte da vulva e dos lábios, oferecendo proteção extra contra o HPV e o vírus da herpes genital.</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 space-y-1.5">
            <strong className="text-purple-950 font-bold block text-sm">3. Pegue Livremente na UBS</strong>
            <p className="text-slate-600">Disponível em qualquer Unidade Básica de Saúde. Se tiver dúvidas, a equipe de enfermagem mostra o passo a passo demonstrativo com carinho.</p>
          </div>
        </div>

        {/* Golden rule regarding lubricants */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-amber-900 font-bold mb-0.5">Regra de Ouro sobre Lubrificantes:</strong>
            Use SEMPRE lubrificantes à base de água (como os sachês distribuídos no SUS). Nunca use vaselina, óleo de coco, hidratantes corporais ou azeite com camisinhas de látex, pois produtos oleosos dissolvem o látex em segundos e causam o rompimento!
          </div>
        </div>
      </div>
    </div>
  );
};
