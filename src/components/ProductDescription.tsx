import { Lock, Zap, BookOpen, Pin, Rewind, FolderDown, X, Check } from 'lucide-react';

const clunkyItems = [
  'Right-click → navigate menus just to start reading',
  'Sidebar opens and hijacks your window layout',
  'No rewind — miss a word and you start over',
  'Your text gets sent to cloud servers',
  'Clunky, slow, and disruptive',
];

const pasteplayItems = [
  'Highlight text → press your hotkey → done',
  'Tiny floating widget — your layout never changes',
  'Keeps reading in the background from the system tray — all users',
  'Instant 5-second rewind to catch anything you missed',
  'Speed controls (faster or slower) on the fly — all users',
  '100% offline — your text never leaves your machine',
  'Smooth, intuitive, and built for real productivity',
];

export function ProductDescription() {
  return (
    <>
      {/* Original What Is PastePlay section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 mb-8 backdrop-blur-sm">
                <p className="text-gray-100 leading-relaxed font-medium text-lg">
                  "PastePlay is a tiny always-on TTS widget that pops up with one hotkey. Highlight text anywhere, press your shortcut, and listen — no context-switching, no clutter."
                </p>
              </div>

              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">What is PastePlay?</h2>

              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                PastePlay is the fastest way to turn any text into audio. Whether you're debugging long docs, scanning research, or reading long threads, PastePlay gives you a compact, always-on widget that reads so you don't have to.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Unlike cloud-only tools, PastePlay works offline and never sends your text to servers. That means faster playback, lower cost, and true privacy.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                It starts with a single global hotkey, auto-fills from the clipboard, and plays using local system voices for instant reliability and privacy. Free features include max 3,000 characters per paste and offline operation.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-100">Instant &amp; Always-On</h3>
                    <p className="text-gray-400 text-sm">One hotkey to pop open, works in the background</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-100">Privacy-First</h3>
                    <p className="text-gray-400 text-sm">Local voices, zero cloud retention by default</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <BookOpen className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-100">No Context Switching</h3>
                    <p className="text-gray-400 text-sm">Tiny floating widget keeps you focused</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="font-bold text-gray-100 mb-4">Free Features</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span className="text-gray-300">Max 3,000 characters per paste</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span className="text-gray-300">Offline operation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span className="text-gray-300">System voices</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span className="text-gray-300">Basic pop-up widget</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg p-6 border border-blue-500/50 backdrop-blur-sm">
                  <h3 className="font-bold text-gray-100 mb-4">Pro — $7.99/mo</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">Custom hotkeys</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">Tray &amp; background mode</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">History &amp; saved snippets</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span className="text-gray-300">AI Premium Voice (Bella)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY NOT BUILT-IN? COMPARISON SECTION ─── */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
              <span className="text-sm font-bold text-red-400 uppercase tracking-widest">Why Not Use Built-In Text To Speech?</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-300 bg-clip-text text-transparent">OS readers are clunky.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">PastePlay is smooth.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Operating system readers were built for accessibility menus — not productivity. PastePlay was built from scratch for people who work fast.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Left: The Clunky Way */}
            <div className="bg-gradient-to-br from-red-900/20 to-gray-900/60 rounded-2xl p-8 border border-red-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-red-400">The "Built-In" Way</h3>
                  <p className="text-gray-500 text-sm">Browser reading mode / Windows Narrator</p>
                </div>
              </div>
              <ul className="space-y-4">
                {clunkyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: The PastePlay Way */}
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-cyan-400">The PastePlay Way</h3>
                  <p className="text-gray-500 text-sm">Built for productivity. Smooth &amp; intuitive.</p>
                </div>
              </div>
              <ul className="space-y-4 relative z-10">
                {pasteplayItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-gray-200 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Callouts Row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/60 rounded-xl p-5 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 group">
              <Pin className="w-7 h-7 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-gray-100 mb-1">Pin It or Hide It</h4>
              <p className="text-gray-400 text-sm">Lock the reader widget to the front of any window, or let it live silently in your system tray.</p>
            </div>
            <div className="bg-gray-900/60 rounded-xl p-5 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 group">
              <Rewind className="w-7 h-7 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-gray-100 mb-1">Instant Rewind</h4>
              <p className="text-gray-400 text-sm">Miss a word? Hit the rewind button to jump back 5 seconds — no restarting, no re-pasting.</p>
            </div>
            <div className="bg-gray-900/60 rounded-xl p-5 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 group">
              <Zap className="w-7 h-7 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-gray-100 mb-1">Speed Controls</h4>
              <p className="text-gray-400 text-sm">Dial your reading speed up or down on the fly. Slow it down for dense content, speed it up for skimming.</p>
            </div>
            <div className="bg-gray-900/60 rounded-xl p-5 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 group">
              <FolderDown className="w-7 h-7 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-gray-100 mb-1">Save Transcripts</h4>
              <p className="text-gray-400 text-sm">Download the text you've read as a local transcript file — your notes, articles, and docs always recoverable.</p>
            </div>
          </div>

          {/* Bottom CTA bar */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 text-center backdrop-blur-sm">
            <p className="text-2xl font-bold text-white mb-2">Instead of navigating menus every time:</p>
            <p className="text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent mb-4">
              Highlight → Hotkey → Listen
            </p>
            <p className="text-gray-400 text-lg">That's it. Keep working while PastePlay reads in the background.</p>
          </div>
        </div>
      </section>
    </>
  );
}
