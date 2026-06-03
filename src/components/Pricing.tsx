import { Check, Star, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const freeFeatures = [
  'Instant paste → speak',
  'Basic system voices',
  'Works offline',
  'Max 3,000 characters per paste',
  'Tray mode + background mode',
  'Privacy Mode (Zero Data Retention)',
  'Local storage',
];

const proFeatures = [
  {
    label: 'Unlimited text-to-speech',
    description:
      'Listen to documents, books, articles, or anything of any length — no character limits, no interruptions. Paste a full research paper or an entire e-book and let PastePlay handle it all.',
  },
  {
    label: 'Hotkey customization',
    description:
      'Choose any keyboard shortcut combo that fits your workflow — Ctrl+Z, Ctrl+X, Alt+R, or any custom combination. PastePlay fires the instant you press it, no matter what app you\'re in.',
  },
  {
    label: 'History / pinned favorites',
    description:
      'Every clip you\'ve read is saved locally so you can replay it later. Pin your most-used passages to the top for quick access. Even 100,000 clips take up less disk space than a single photo.',
  },
  {
    label: 'Download transcript',
    description:
      'Save the text of anything you\'ve read as a local .txt file with one click. Perfect for archiving articles, research notes, or anything you want to keep as a local reference.',
  },
  {
    label: 'Review saved clips',
    description:
      'Open your full clip library and replay any saved snippet at any time. Browse your reading history, re-listen to important passages, and manage your collection — all stored locally.',
  },
  {
    label: 'Privacy Mode (Zero Data Retention)',
    description:
      'When Privacy Mode is on, PastePlay automatically purges your clipboard text and reading history the moment playback ends. Nothing is stored, nothing is logged — complete zero-trace reading.',
  },
  {
    label: 'Local storage',
    description:
      'All settings, history, and saved clips are stored 100% on your computer. Nothing is sent to external servers. Your data is yours — always accessible offline, always private.',
  },
  {
    label: 'Priority support + feature requests',
    description:
      'Get direct access to the developer. Pro members jump the support queue and can submit feature requests that directly influence the roadmap. Your feedback shapes PastePlay\'s future.',
  },
  {
    label: 'Early access to new features',
    description:
      'Be the first to try beta features — new voice styles, UI themes, cross-application integrations, and experimental tools — before they roll out to everyone.',
  },
  {
    label: 'Lightning Fast search using keywords',
    description:
      'Instantly filter through your entire clip history in real-time using the built-in keyword search bar. Find any passage you\'ve ever read in seconds, no matter how large your library.',
  },
  {
    label: 'AI Premium Voice (Bella)',
    description:
      'Unlock ultra-realistic, natural-sounding AI voices that make listening to long papers, articles, or books feel like a premium audiobook experience — far beyond standard system TTS voices.',
  },
];

function ProFeatureItem({ feature }: { feature: { label: string; description: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border border-gray-700/40 rounded-lg overflow-hidden transition-all duration-200 hover:border-cyan-500/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left group"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className={`mt-0 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${open ? 'bg-cyan-500' : 'bg-cyan-500/20'}`}>
            <Check className={`w-3 h-3 transition-colors ${open ? 'text-black' : 'text-cyan-400'}`} />
          </div>
          <span className={`text-sm font-medium transition-colors ${open ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
            {feature.label}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-all duration-300 ${open ? 'rotate-180 text-cyan-400' : 'text-gray-500 group-hover:text-cyan-400'}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-gray-700/40 bg-black/20">
          <p className="text-gray-400 text-sm leading-relaxed pt-3">
            {feature.description}
          </p>
        </div>
      )}
    </li>
  );
}

interface PricingProps {
  onProAction?: (plan: 'monthly' | 'yearly') => void;
}

export function Pricing({ onProAction }: PricingProps) {
  return (
    <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
          What You Get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 rounded-3xl shadow-xl p-8 md:p-10 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-3xl font-black mb-8 text-white flex items-center gap-2">
              <Check className="w-8 h-8 text-green-500" />
              Free
            </h3>
            <ul className="space-y-4">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <div className="mt-1 w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-gray-500 group-hover/item:text-green-500 transition-colors" />
                  </div>
                  <span className="text-gray-400 group-hover/item:text-gray-200 transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm font-medium">No account required</p>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-blue-900/40 via-cyan-900/40 to-blue-900/40 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-cyan-400 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-full py-2 px-4 shadow-lg shadow-cyan-500/20">
                Most Popular
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-4xl font-black text-white mb-2 flex items-center gap-2">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                Pro
              </h3>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
                  $7.99 / month
                </span>
                <span className="text-cyan-400 font-bold flex items-center gap-2">
                  or $70 yearly
                  <span className="bg-cyan-500 text-black text-[10px] px-2 py-0.5 rounded-full font-black uppercase">
                    Save 25%
                  </span>
                </span>
              </div>
            </div>

            {/* Includes all Free features badge */}
            <div className="mb-6 py-2.5 px-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Includes all Free features (Tray &amp; background mode, offline, etc.)</span>
            </div>

            {/* Interactive Pro Features List */}
            <ul className="space-y-2 mb-8">
              {proFeatures.map((feature, index) => (
                <ProFeatureItem key={index} feature={feature} />
              ))}
            </ul>

            <div className="space-y-4">
              <button
                onClick={() => onProAction?.('monthly')}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-black text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Get Monthly — $7.99
                <Star className="w-5 h-5" />
              </button>
              <button
                onClick={() => onProAction?.('yearly')}
                className="w-full py-4 bg-gradient-to-r from-gray-100 via-white to-gray-100 text-gray-900 rounded-xl font-black text-lg hover:shadow-xl hover:shadow-white/10 transition-all flex items-center justify-center gap-2 border border-white/50 shadow-inner group"
              >
                Get Yearly — $70
                <Star className="w-5 h-5 fill-current text-yellow-500 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Multi-language support coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
