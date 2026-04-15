import {
  Activity,
  AlertCircle,
  ArrowRight,
  Armchair,
  Brain,
  ChevronDown,
  Clock,
  Droplets,
  Dumbbell,
  Eye,
  Heart,
  Layout,
  Monitor,
  Move,
  RefreshCw,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const sections = [
  {
    id: "anatomy",
    title: "Bölüm 1: Beyaz Yakalı Anatomisi",
    icon: Brain,
    color: "from-blue-500 to-cyan-400",
    content: [
      {
        title: '"Forward Head" (İleri Kafa) Postürü',
        icon: Eye,
        description:
          'Her 2.5 cm\'lik öne eğilme, servikal omurgaya +4.5 kg ek yük bindirir.',
        points: [
          "Suboksipital kas spazmı ve kronik baş ağrıları",
          "Servikal lordozun (boyun kavisinin) düzleşmesi",
          "Uzun vadede servikal disk dejenerasyonu",
        ],
      },
      {
        title: '"Kambur" ve Interior Omuz Rotasyonu',
        icon: Move,
        description:
          'Kolay erişilebilir klavye pozisyonu, göğüs kaslarının kısalmasına yol açar.',
        points: [
          "Skapular instabilite (kürek kemiği dengesizliği)",
          '"Rounded Shoulder" (Yuvarlak omuzlar)',
          "Omuz impingement sendromu riski",
        ],
      },
      {
        title: "Alt Ekstremite ve Pelvik Problemler",
        icon: Target,
        description: "Uzun süreli oturma pozisyonunun etkileri:",
        points: [
          "Kalça fleksör (psoas) kaslarının adaptif kısalması",
          'Gluteal amnezi (kalça kaslarının "unutulması")',
          "Lomber lordozun düzleşmesi ve disk basıncı artışı",
        ],
      },
      {
        title: "Karpal Tünel ve Üst Ekstremite",
        icon: AlertCircle,
        description: "El ve bilek sorunları:",
        points: [
          "Karpal Tünel: Median sinirin el bileğinde baskılanması",
          "Kübital Tünel: Ulnar sinirin dirsekte irritasyonu",
        ],
      },
    ],
  },
  {
    id: "ergonomics",
    title: "Bölüm 2: Ergonomik Mimari",
    icon: Layout,
    color: "from-emerald-500 to-teal-400",
    content: [
      {
        title: "Görsel Aks Optimizasyonu (Monitör)",
        icon: Monitor,
        description: "Monitör konumlandırması:",
        points: [
          "Üst sınır göz seviyesinde olmalı",
          "Kol mesafesi (50-70 cm)",
          "Göz yorgunluğu 'ileri kafa' postürünü tetikler",
        ],
      },
      {
        title: "Pelvik ve Lumbar Destek (Koltuk)",
        icon: Armchair,
        description: "Koltuk ayarları:",
        points: [
          "Diz ve kalça açısı 90-100 derece",
          "Lumbar destek disk basıncını %40 azaltır",
          "Omurganın doğal lordoz kavisini destekler",
        ],
      },
      {
        title: "Üst Ekstremite Hizalaması",
        icon: Move,
        description: "Klavye ve mouse kullanımı:",
        points: [
          "Ön kollar yere paralel",
          "Omuzlar deprese (aşağıda) pozisyonda",
          "Bilek desteği yerine omuzdan hareket",
        ],
      },
    ],
  },
  {
    id: "rehabilitation",
    title: "Bölüm 3: Rehabilitasyon Protokolleri",
    icon: RefreshCw,
    color: "from-violet-500 to-purple-400",
    content: [
      {
        title: 'Faz 0: "Micro-Break" (45-60 dk)',
        icon: Clock,
        description: "Her 45-60 dakikada yapılacaklar:",
        points: [
          "Brugger Pozisyonu (20 sn): Sandalyenin ucuna oturun",
          "Chin Tuck (10 tekrar): Çenenizi içeri çekin",
          "Diyafram nefesi alın",
        ],
      },
      {
        title: 'Faz 1: "Post-Work" Restorasyon',
        icon: Dumbbell,
        description: "Gün sonu 15 dakikalık rutin:",
        points: [
          "Couch Stretch: Kalça fleksör esnetme",
          "Thoracic Foam Rolling: Sırt mobilizasyonu",
          "Dead Bug: Core aktivasyonu",
        ],
      },
    ],
  },
  {
    id: "biohacking",
    title: "Bölüm 4: Bio-Hacking ve Araçlar",
    icon: Sparkles,
    color: "from-amber-500 to-orange-400",
    content: [
      {
        title: "Donanım Güncellemeleri",
        icon: Activity,
        description: "Vücudunuzu optimize edin:",
        points: [
          "Direnç bantları: Günde 3 set 'Band Pull-Apart'",
          'Yükseklik ayarlı masalar: "Oturma yeni sigara içmedir"',
          "Lacrosse topu ile tetik nokta masajı",
          "Hidrasyon: Disklerin %80'i sudur",
        ],
      },
    ],
  },
  {
    id: "metrics",
    title: "Bölüm 5: Metrikler ve Alışkanlık",
    icon: Target,
    color: "from-rose-500 to-pink-400",
    content: [
      {
        title: "KPI'ları Takip Edin",
        icon: Activity,
        description: "Başarıyı ölçün:",
        points: [
          "Ağrı Skoru (VAS): Hedef 2'nin altı",
          "Mobilite Testi: Ayak parmaklarına dokunabiliyor musunuz?",
          "Solunum Kalitesi: 6-10 nefes/dakika",
        ],
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-teal-100 dark:bg-teal-900/30 px-4 py-2 text-sm font-medium text-teal-700 dark:text-teal-300">
            <Heart className="mr-2 h-4 w-4" />
            Sağlıklı Çalışma Rehberi
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Beyaz Yaka{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Fizyo
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            &ldquo;Kodunuz temiz, omurganız dik olsun.&rdquo;
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-500 dark:text-slate-400">
            Masa başında çalışan yazılımcılar ve ofis çalışanları için
            fizyoterapi ve ergonomi rehberi. Karpal tünel, boyun düzleşmesi ve
            postür bozukluklarına karşı çözümler.
          </p>
          <a
            href="#anatomy"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition-all hover:scale-105 hover:shadow-xl"
          >
            Rehberi Keşfet
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className="px-6 py-16 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            {/* Section Header */}
            <div className="mb-12 flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${section.color} shadow-lg`}
              >
                <section.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                {section.title}
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.content.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-lg hover:ring-slate-900/10"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600">
                      <item.icon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Community Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-500 p-8 text-center text-white shadow-xl sm:p-12">
            <Users className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Kolektif Katkı ve Topluluk
            </h2>
            <p className="mb-8 text-teal-100">
              Bu rehber, yaşayan bir dokümandır. Sağlık profesyonelleri, yazılım
              geliştiriciler ve kullanıcılar birlikte geliştirir.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Heart className="mx-auto mb-2 h-6 w-6" />
                <p className="text-sm font-medium">Sağlık Profesyonelleri</p>
                <p className="text-xs text-teal-100">
                  Klinik çalışmaları entegre edin
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Brain className="mx-auto mb-2 h-6 w-6" />
                <p className="text-sm font-medium">Yazılımcılar</p>
                <p className="text-xs text-teal-100">
                  AI modelleri ve botlar geliştirin
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Sparkles className="mx-auto mb-2 h-6 w-6" />
                <p className="text-sm font-medium">Kullanıcılar</p>
                <p className="text-xs text-teal-100">
                  Başarı hikayelerinizi paylaşın
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-900/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <h3 className="mb-2 font-semibold text-amber-900 dark:text-amber-400">
                  ⚠️ Kritik Uyarı ve Sorumluluk Reddi
                </h3>
                <p className="text-sm text-amber-800 dark:text-amber-300/80">
                  Bu rehber tıbbi bir tedavi protokolü değil, bir farkındalık
                  ve genel sağlık rehberidir. Şiddetli ağrı, uyuşma, kuvvet
                  kaybı veya bilinen bir fıtık tanısı durumunda, bu hareketleri
                  uygulamadan önce mutlaka uzman bir Fizyoterapist veya
                  Fiziksel Tıp ve Rehabilitasyon Uzmanına danışınız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl text-center">
          <Droplets className="mx-auto mb-3 h-6 w-6 text-teal-500" />
          <p className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
            &ldquo;Kodunuz temiz, omurganız dik olsun.&rdquo;
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Beyaz Yaka Fizyo © 2024 - Açık kaynak sağlık rehberi
          </p>
        </div>
      </footer>
    </main>
  );
}
