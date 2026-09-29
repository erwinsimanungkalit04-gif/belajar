<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hitung123.id: Media Pembelajaran Sistem Digital Interaktif & Laboratorium Virtual</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <!-- jsPDF for Client-Side PDF Certificate Export -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <!-- Three.js for 3D Cybernetic Background -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

    <!-- Instant Theme Initializer to prevent flash -->
    <script>
        (function () {
            const saved = localStorage.getItem('h123_theme') || 'dark';
            if (saved === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
                document.documentElement.classList.add('theme-light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                document.documentElement.classList.remove('theme-light');
            }
        })();
    </script>

    <style>
        :root {
            --holo-cyan: #00f5ff;
            --holo-purple: #a855f7;
            --holo-pink: #ec4899;
            --holo-green: #10b981;
            --holo-amber: #f59e0b;
            --bg-base: #060913;
            --text-base: #f1f5f9;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            overflow-x: hidden;
            min-height: 100vh;
            transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .font-mono-code {
            font-family: 'JetBrains Mono', monospace;
        }

        /* ==========================================================
       HOLOGRAPHIC & DYNAMIC GRADIENT EFFECTS (DARK MODE DEFAULT)
       ========================================================== */
        @keyframes textGradientFlow {
            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }
        }

        .holo-text {
            background: linear-gradient(135deg, #00f5ff 0%, #818cf8 30%, #c084fc 60%, #f472b6 100%);
            background-size: 250% 250%;
            animation: textGradientFlow 6s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }

        .holo-text-alt {
            background: linear-gradient(135deg, #34d399 0%, #00f5ff 50%, #818cf8 100%);
            background-size: 200% 200%;
            animation: textGradientFlow 5s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }

        /* Vibrant Glassmorphism Card System (Dark Mode) */
        .holo-card {
            background: rgba(13, 20, 38, 0.84);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 245, 255, 0.26);
            box-shadow:
                0 12px 36px 0 rgba(0, 0, 0, 0.55),
                inset 0 1px 0 rgba(255, 255, 255, 0.12),
                inset 0 0 20px rgba(0, 245, 255, 0.04);
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
        }

        .holo-card:hover {
            border-color: rgba(0, 245, 255, 0.6);
            box-shadow:
                0 18px 48px -8px rgba(0, 245, 255, 0.22),
                0 0 30px rgba(168, 85, 247, 0.18),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
        }

        .holo-card-purple {
            background: rgba(22, 17, 43, 0.84);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(168, 85, 247, 0.32);
            box-shadow:
                0 12px 36px 0 rgba(0, 0, 0, 0.55),
                inset 0 1px 0 rgba(255, 255, 255, 0.12);
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .holo-card-purple:hover {
            border-color: rgba(192, 132, 252, 0.7);
            box-shadow:
                0 18px 48px -8px rgba(168, 85, 247, 0.28),
                0 0 30px rgba(236, 72, 153, 0.2);
            transform: translateY(-3px);
        }

        /* Glowing Buttons with Shimmer Highlight */
        .holo-btn {
            position: relative;
            background: linear-gradient(135deg, rgba(0, 245, 255, 0.4), rgba(168, 85, 247, 0.5));
            border: 1px solid rgba(0, 245, 255, 0.6);
            box-shadow: 0 4px 20px rgba(0, 245, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            overflow: hidden;
        }

        .holo-btn::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -60%;
            width: 40%;
            height: 200%;
            background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
            transform: rotate(25deg);
            transition: all 0.75s ease;
            opacity: 0;
            pointer-events: none;
        }

        .holo-btn:hover {
            background: linear-gradient(135deg, rgba(0, 245, 255, 0.6), rgba(236, 72, 153, 0.6));
            border-color: rgba(236, 72, 153, 0.9);
            box-shadow: 0 8px 30px rgba(168, 85, 247, 0.55), 0 0 20px rgba(0, 245, 255, 0.45);
            transform: translateY(-2px) scale(1.02);
        }

        .holo-btn:hover::after {
            left: 140%;
            opacity: 1;
        }

        .holo-btn-green {
            position: relative;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(0, 245, 255, 0.4));
            border: 1px solid rgba(16, 185, 129, 0.65);
            box-shadow: 0 4px 20px rgba(16, 185, 129, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transition: all 0.25s ease;
            overflow: hidden;
        }

        .holo-btn-green:hover {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.6), rgba(0, 245, 255, 0.6));
            border-color: #34d399;
            box-shadow: 0 8px 30px rgba(16, 185, 129, 0.55), 0 0 20px rgba(0, 245, 255, 0.45);
            transform: translateY(-2px) scale(1.02);
        }

        /* Ambient Dynamic Floating Spheres */
        @keyframes floatOrb1 {

            0%,
            100% {
                transform: translate(0, 0) scale(1);
            }

            50% {
                transform: translate(70px, 50px) scale(1.2);
            }
        }

        @keyframes floatOrb2 {

            0%,
            100% {
                transform: translate(0, 0) scale(1);
            }

            50% {
                transform: translate(-60px, 60px) scale(1.15);
            }
        }

        @keyframes floatOrb3 {

            0%,
            100% {
                transform: translate(0, 0) scale(1);
            }

            50% {
                transform: translate(50px, -65px) scale(1.25);
            }
        }

        @keyframes floatOrb4 {

            0%,
            100% {
                transform: translate(0, 0) scale(1);
            }

            50% {
                transform: translate(-40px, -40px) scale(1.1);
            }
        }

        .neon-glow-cyan {
            position: absolute;
            width: 550px;
            height: 550px;
            background: radial-gradient(circle, rgba(0, 245, 255, 0.18) 0%, rgba(0, 245, 255, 0.03) 45%, transparent 70%);
            pointer-events: none;
            z-index: 0;
            animation: floatOrb1 16s ease-in-out infinite alternate;
            filter: blur(40px);
        }

        .neon-glow-purple {
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.16) 0%, rgba(168, 85, 247, 0.03) 45%, transparent 70%);
            pointer-events: none;
            z-index: 0;
            animation: floatOrb2 20s ease-in-out infinite alternate;
            filter: blur(45px);
        }

        .neon-glow-pink {
            position: absolute;
            width: 520px;
            height: 520px;
            background: radial-gradient(circle, rgba(236, 72, 153, 0.14) 0%, rgba(236, 72, 153, 0.02) 45%, transparent 70%);
            pointer-events: none;
            z-index: 0;
            animation: floatOrb3 18s ease-in-out infinite alternate;
            filter: blur(40px);
        }

        .neon-glow-emerald {
            position: absolute;
            width: 480px;
            height: 480px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.13) 0%, rgba(16, 185, 129, 0.02) 45%, transparent 70%);
            pointer-events: none;
            z-index: 0;
            animation: floatOrb4 22s ease-in-out infinite alternate;
            filter: blur(40px);
        }

        /* Cyber Matrix Background Texture Layer */
        .cyber-grid-layer {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 0;
            transition: all 0.4s ease;
        }

        body:not(.theme-light) .cyber-grid-layer {
            background-image:
                linear-gradient(to right, rgba(0, 245, 255, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(168, 85, 247, 0.04) 1px, transparent 1px);
            background-size: 40px 40px;
            mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 80%);
            -webkit-mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 80%);
        }

        /* Active Pulse Ring Effect */
        @keyframes pulseRing {
            0% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(0, 245, 255, 0.7);
            }

            70% {
                transform: scale(1);
                box-shadow: 0 0 0 10px rgba(0, 245, 255, 0);
            }

            100% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(0, 245, 255, 0);
            }
        }

        .pulse-ring-cyan {
            animation: pulseRing 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        /* Drawer Glow Border */
        @keyframes drawerBorderGlow {

            0%,
            100% {
                border-left-color: rgba(0, 245, 255, 0.6);
            }

            50% {
                border-left-color: rgba(168, 85, 247, 0.8);
            }
        }

        #curriculumDrawer {
            animation: drawerBorderGlow 4s ease-in-out infinite;
        }

        /* Motivation Video Carousel Horizontal Scrollbar */
        .custom-carousel-scroll {
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 245, 255, 0.45) rgba(15, 23, 42, 0.6);
            -webkit-overflow-scrolling: touch;
        }

        .custom-carousel-scroll::-webkit-scrollbar {
            height: 7px;
        }

        .custom-carousel-scroll::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.7);
            border-radius: 9999px;
        }

        .custom-carousel-scroll::-webkit-scrollbar-thumb {
            background: rgba(0, 245, 255, 0.45);
            border-radius: 9999px;
            border: 1px solid rgba(0, 245, 255, 0.2);
        }

        .custom-carousel-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(168, 85, 247, 0.8);
        }

        body.theme-light .custom-carousel-scroll {
            scrollbar-color: rgba(14, 165, 233, 0.6) rgba(226, 232, 240, 0.85);
        }

        body.theme-light .custom-carousel-scroll::-webkit-scrollbar-track {
            background: rgba(226, 232, 240, 0.85);
        }

        body.theme-light .custom-carousel-scroll::-webkit-scrollbar-thumb {
            background: rgba(14, 165, 233, 0.6);
            border: 1px solid rgba(14, 165, 233, 0.3);
        }

        /* Active Meeting Sub-navigation Tab */
        .active-bab-tab {
            background: linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%) !important;
            border-color: rgba(6, 182, 212, 0.8) !important;
            color: #ffffff !important;
            box-shadow: 0 4px 15px rgba(6, 182, 212, 0.4) !important;
        }

        .theme-light .active-bab-tab {
            background: linear-gradient(135deg, #0284c7 0%, #7c3aed 100%) !important;
            border-color: #0369a1 !important;
            color: #ffffff !important;
            box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35) !important;
        }

        /* ==========================================================
       DARK THEME (DEFAULT): HIGH-CONTRAST & CLEAR READABILITY
       ========================================================== */
        body:not(.theme-light) {
            background-color: #060913;
            background-image:
                radial-gradient(circle at 50% 0%, rgba(30, 41, 89, 0.5) 0%, transparent 65%),
                radial-gradient(circle at 100% 50%, rgba(168, 85, 247, 0.09) 0%, transparent 50%),
                radial-gradient(circle at 0% 100%, rgba(0, 245, 255, 0.09) 0%, transparent 50%);
            color: #f1f5f9;
        }

        body:not(.theme-light) .text-white {
            color: #ffffff !important;
        }

        body:not(.theme-light) .text-slate-100,
        body:not(.theme-light) .text-slate-200 {
            color: #f8fafc !important;
        }

        body:not(.theme-light) .text-slate-300,
        body:not(.theme-light) .text-gray-300 {
            color: #e2e8f0 !important;
        }

        body:not(.theme-light) .text-slate-400,
        body:not(.theme-light) .text-gray-400 {
            color: #cbd5e1 !important;
            /* Elevated from dim gray to clear readable silver-slate */
        }

        body:not(.theme-light) .text-slate-500,
        body:not(.theme-light) .text-slate-600,
        body:not(.theme-light) .text-gray-500,
        body:not(.theme-light) .text-gray-600 {
            color: #94a3b8 !important;
            /* Elevated from near-black to clearly visible slate */
        }

        /* Form controls in Dark Mode */
        body:not(.theme-light) input[type="text"],
        body:not(.theme-light) input[type="number"],
        body:not(.theme-light) select,
        body:not(.theme-light) textarea {
            background-color: #0b1120 !important;
            color: #ffffff !important;
            border-color: rgba(56, 189, 248, 0.45) !important;
        }

        body:not(.theme-light) select option {
            background-color: #0b1120 !important;
            color: #ffffff !important;
        }

        body:not(.theme-light) input::placeholder {
            color: #64748b !important;
        }

        /* Unselected K-Map cells in Dark Mode */
        body:not(.theme-light) .kmap-cell:not(.bg-amber-500):not(.bg-emerald-500):not(.bg-cyan-500):not(.bg-purple-500) {
            background-color: #090e1a !important;
            border-color: #334155 !important;
            color: #cbd5e1 !important;
        }

        body:not(.theme-light) .kmap-cell span {
            color: #94a3b8 !important;
        }

        body:not(.theme-light) .kmap-cell span.font-bold {
            color: #f1f5f9 !important;
        }

        /* Code tags in Dark Mode */
        body:not(.theme-light) code {
            color: #38bdf8;
        }

        /* ==========================================================
       VIBRANT LIGHT THEME: DEEP CRISP CONTRAST, HIGH LEGIBILITY
       ========================================================== */
        .theme-light {
            --bg-base: #edf2f7;
            --text-base: #090d16;
        }

        /* 1. Page background: soft cool slate-tinted canvas so white cards stand out clearly */
        .theme-light body {
            background-color: #edf2f7 !important;
            background-image:
                radial-gradient(circle at 50% 0%, rgba(2, 132, 199, 0.12) 0%, transparent 60%),
                radial-gradient(circle at 100% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 0% 100%, rgba(5, 150, 105, 0.08) 0%, transparent 50%) !important;
            color: #090d16 !important;
        }

        .theme-light .neon-glow-cyan,
        .theme-light .neon-glow-purple,
        .theme-light .neon-glow-pink,
        .theme-light .neon-glow-emerald {
            opacity: 0.18 !important;
            filter: blur(65px) !important;
        }

        .theme-light .cyber-grid-layer {
            background-image:
                linear-gradient(to right, rgba(2, 132, 199, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(124, 58, 237, 0.08) 1px, transparent 1px) !important;
            background-size: 36px 36px !important;
        }

        /* 2. Cards in Light Mode: Pure Crisp White with Strong Border and Shadow Lift */
        .theme-light .holo-card {
            background: #ffffff !important;
            border: 1.5px solid #cbd5e1 !important;
            box-shadow:
                0 10px 25px -4px rgba(15, 23, 42, 0.12),
                0 4px 6px -2px rgba(15, 23, 42, 0.05),
                inset 0 1px 0 #ffffff !important;
            color: #090d16 !important;
        }

        .theme-light .holo-card:hover {
            border-color: #0284c7 !important;
            box-shadow:
                0 16px 35px -6px rgba(2, 132, 199, 0.22),
                0 4px 12px rgba(124, 58, 237, 0.12) !important;
        }

        .theme-light header {
            background-color: rgba(255, 255, 255, 0.96) !important;
            border-bottom: 2px solid #cbd5e1 !important;
            box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08) !important;
        }

        .theme-light #curriculumDrawer {
            background-color: #ffffff !important;
            border-left: 3px solid #0284c7 !important;
            box-shadow: -15px 0 50px rgba(15, 23, 42, 0.18) !important;
            color: #090d16 !important;
        }

        .theme-light #quizModal .holo-card {
            background-color: #ffffff !important;
            border: 2px solid #0284c7 !important;
            box-shadow: 0 25px 60px rgba(15, 23, 42, 0.25) !important;
            color: #090d16 !important;
        }

        /* 3. Deep Saturated Gradient for Holo-Text in Light Mode (No washed out neon!) */
        .theme-light .holo-text {
            background: linear-gradient(135deg, #0284c7 0%, #4f46e5 35%, #7c3aed 70%, #be123c 100%) !important;
            background-size: 250% 250% !important;
            animation: textGradientFlow 6s ease infinite !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            display: inline-block !important;
            font-weight: 900 !important;
        }

        .theme-light .holo-text-alt {
            background: linear-gradient(135deg, #047857 0%, #0284c7 50%, #6d28d9 100%) !important;
            background-size: 200% 200% !important;
            animation: textGradientFlow 5s ease infinite !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            display: inline-block !important;
            font-weight: 900 !important;
        }

        /* 4. Buttons in Light Mode: Bold, High-Contrast */
        .theme-light .holo-btn {
            background: linear-gradient(135deg, #0284c7 0%, #7c3aed 100%) !important;
            border: 1.5px solid #0369a1 !important;
            color: #ffffff !important;
            box-shadow: 0 4px 15px rgba(2, 132, 199, 0.35) !important;
            font-weight: 700 !important;
        }

        .theme-light .holo-btn:hover {
            background: linear-gradient(135deg, #0369a1 0%, #6d28d9 100%) !important;
            box-shadow: 0 6px 20px rgba(124, 58, 237, 0.45) !important;
        }

        .theme-light .holo-btn-green {
            background: linear-gradient(135deg, #059669 0%, #0284c7 100%) !important;
            border: 1.5px solid #047857 !important;
            color: #ffffff !important;
            box-shadow: 0 4px 15px rgba(5, 150, 105, 0.35) !important;
            font-weight: 700 !important;
        }

        .theme-light .holo-btn-green:hover {
            background: linear-gradient(135deg, #047857 0%, #0369a1 100%) !important;
            box-shadow: 0 6px 20px rgba(5, 150, 105, 0.45) !important;
        }

        /* 5. Nested containers inside cards: Distinct tinted insets so content is well-structured */
        .theme-light .bg-slate-900,
        .theme-light .bg-slate-950,
        .theme-light .bg-\[\#090d16\],
        .theme-light .bg-\[\#07090e\],
        .theme-light .bg-\[\#060913\] {
            background-color: #f8fafc !important;
            color: #090d16 !important;
            border-color: #cbd5e1 !important;
        }

        .theme-light .border-slate-800,
        .theme-light .border-slate-700,
        .theme-light .border-slate-600 {
            border-color: #cbd5e1 !important;
        }

        /* -------------------------------------------------------------
       CRITICAL: NEUTRAL FONT COLORS IN LIGHT MODE (MAXIMUM CONTRAST)
       ------------------------------------------------------------- */
        .theme-light .text-white,
        .theme-light h1,
        .theme-light h2,
        .theme-light h3,
        .theme-light h4,
        .theme-light h5,
        .theme-light .text-slate-100,
        .theme-light .text-slate-200 {
            color: #090d16 !important;
            /* Pure solid deep ink obsidian */
            font-weight: 800;
        }

        .theme-light p,
        .theme-light .text-slate-300,
        .theme-light .text-gray-300 {
            color: #1e293b !important;
            /* Deep charcoal slate-800, sharp and clear */
            font-weight: 500;
        }

        .theme-light .text-slate-400,
        .theme-light .text-gray-400 {
            color: #1e293b !important;
            /* Deep charcoal slate-800 - NO FAINT/MUTED GRAY! */
            font-weight: 500;
        }

        .theme-light .text-slate-500,
        .theme-light .text-slate-600,
        .theme-light .text-gray-500,
        .theme-light .text-gray-600 {
            color: #334155 !important;
            /* Slate-700, solid readable ink */
            font-weight: 600;
        }

        /* -------------------------------------------------------------
       CRITICAL: ACCENT COLORS IN LIGHT MODE (DEEP, SATURATED & PEKAT)
       ------------------------------------------------------------- */
        /* Cyan / Blue -> Deep Cobalt Navy Blue (Sky-700 / Blue-800) */
        .theme-light .text-cyan-100,
        .theme-light .text-cyan-200,
        .theme-light .text-cyan-300,
        .theme-light .text-cyan-400,
        .theme-light .text-cyan-500,
        .theme-light .text-cyan-600 {
            color: #0369a1 !important;
            /* Deep Cobalt Navy - PEKAT & TEGAS */
            font-weight: 700;
        }

        /* Purple / Violet -> Deep Midnight Royal Purple (Purple-800) */
        .theme-light .text-purple-100,
        .theme-light .text-purple-200,
        .theme-light .text-purple-300,
        .theme-light .text-purple-400,
        .theme-light .text-purple-500,
        .theme-light .text-purple-600 {
            color: #6b21a8 !important;
            /* Deep Midnight Purple - PEKAT & VIBRANT */
            font-weight: 700;
        }

        /* Indigo -> Deep Ultramarine Navy (Indigo-800) */
        .theme-light .text-indigo-100,
        .theme-light .text-indigo-200,
        .theme-light .text-indigo-300,
        .theme-light .text-indigo-400,
        .theme-light .text-indigo-500,
        .theme-light .text-indigo-600 {
            color: #3730a3 !important;
            font-weight: 700;
        }

        .theme-light [class*="bg-cyan-950"],
        .theme-light [class*="bg-purple-950"],
        .theme-light [class*="bg-pink-950"],
        .theme-light [class*="bg-amber-950"],
        .theme-light [class*="bg-indigo-950"],
        .theme-light [class*="bg-emerald-950"] {
            background-color: #f1f5f9 !important;
            border-color: #cbd5e1 !important;
        }

        /* Pink / Magenta -> Deep Ruby Carmine (Rose-800) */
        .theme-light .text-pink-100,
        .theme-light .text-pink-200,
        .theme-light .text-pink-300,
        .theme-light .text-pink-400,
        .theme-light .text-pink-500,
        .theme-light .text-pink-600,
        .theme-light .text-rose-300,
        .theme-light .text-rose-400,
        .theme-light .text-rose-400\/80,
        .theme-light .text-rose-500 {
            color: #9f1239 !important;
            /* Deep Crimson Ruby - PEKAT & MENONJOL */
            font-weight: 700;
        }

        /* Emerald / Green -> Deep Pine Forest Green (Emerald-800) */
        .theme-light .text-emerald-100,
        .theme-light .text-emerald-200,
        .theme-light .text-emerald-300,
        .theme-light .text-emerald-400,
        .theme-light .text-emerald-400\/80,
        .theme-light .text-emerald-500,
        .theme-light .text-emerald-600 {
            color: #065f46 !important;
            /* Deep Forest Emerald - PEKAT & BERSIH */
            font-weight: 700;
        }

        /* Amber / Yellow -> Deep Burnt Bronze Amber (Amber-800) */
        .theme-light .text-amber-100,
        .theme-light .text-amber-200,
        .theme-light .text-amber-300,
        .theme-light .text-amber-400,
        .theme-light .text-amber-500,
        .theme-light .text-amber-600 {
            color: #92400e !important;
            /* Deep Bronze Amber - SANGAT JELAS PADA LATAR TERANG */
            font-weight: 700;
        }

        .theme-light .text-red-400,
        .theme-light .text-red-500,
        .theme-light .text-red-600 {
            color: #b91c1c !important;
            /* Red-700 */
            font-weight: 700;
        }

        /* -------------------------------------------------------------
       PASTEL PILLS & BADGES IN LIGHT MODE (SOLID INK & CLEAN BORDER)
       ------------------------------------------------------------- */
        .theme-light [class*="bg-cyan-950"] {
            background-color: #e0f2fe !important;
            border: 1.5px solid #0284c7 !important;
            color: #075985 !important;
            font-weight: 800 !important;
        }

        .theme-light [class*="bg-purple-950"] {
            background-color: #f3e8ff !important;
            border: 1.5px solid #7c3aed !important;
            color: #581c87 !important;
            font-weight: 800 !important;
        }

        .theme-light [class*="bg-pink-950"] {
            background-color: #ffe4e6 !important;
            border: 1.5px solid #e11d48 !important;
            color: #881337 !important;
            font-weight: 800 !important;
        }

        .theme-light [class*="bg-emerald-950"] {
            background-color: #d1fae5 !important;
            border: 1.5px solid #059669 !important;
            color: #064e3b !important;
            font-weight: 800 !important;
        }

        .theme-light [class*="bg-amber-950"] {
            background-color: #fef3c7 !important;
            border: 1.5px solid #d97706 !important;
            color: #78350f !important;
            font-weight: 800 !important;
        }

        .theme-light [class*="border-cyan-800"],
        .theme-light [class*="border-cyan-700"] {
            border-color: #0284c7 !important;
        }

        .theme-light [class*="border-purple-800"],
        .theme-light [class*="border-purple-700"] {
            border-color: #7c3aed !important;
        }

        .theme-light [class*="border-pink-800"],
        .theme-light [class*="border-pink-700"] {
            border-color: #e11d48 !important;
        }

        .theme-light [class*="border-emerald-800"],
        .theme-light [class*="border-emerald-700"] {
            border-color: #059669 !important;
        }

        .theme-light [class*="border-amber-800"],
        .theme-light [class*="border-amber-700"] {
            border-color: #d97706 !important;
        }

        /* -------------------------------------------------------------
       INPUTS, SELECTS, TEXTAREAS IN LIGHT MODE
       ------------------------------------------------------------- */
        .theme-light input[type="text"],
        .theme-light input[type="number"],
        .theme-light select,
        .theme-light textarea {
            background-color: #ffffff !important;
            color: #090d16 !important;
            border: 2px solid #94a3b8 !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
            font-weight: 700 !important;
        }

        .theme-light input:focus,
        .theme-light select:focus,
        .theme-light textarea:focus {
            border-color: #0284c7 !important;
            outline: none !important;
            box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.3) !important;
        }

        .theme-light input::placeholder {
            color: #64748b !important;
            font-weight: 500;
        }

        .theme-light select option {
            background-color: #ffffff !important;
            color: #090d16 !important;
            font-weight: 600 !important;
        }

        /* -------------------------------------------------------------
       CODE, TABLES & K-MAP CELLS IN LIGHT MODE
       ------------------------------------------------------------- */
        .theme-light code {
            background-color: #e2e8f0 !important;
            color: #075985 !important;
            /* Deep Cobalt Blue */
            border: 1.5px solid #94a3b8 !important;
            border-radius: 6px !important;
            padding: 2px 6px !important;
            font-weight: 800 !important;
        }

        .theme-light table {
            border: 1.5px solid #cbd5e1 !important;
        }

        .theme-light th {
            background-color: #e0f2fe !important;
            color: #0369a1 !important;
            border: 1.5px solid #bae6fd !important;
            font-weight: 800 !important;
        }

        .theme-light td {
            border: 1px solid #e2e8f0 !important;
            color: #090d16 !important;
            font-weight: 600 !important;
        }

        .theme-light .kmap-cell:not(.bg-amber-500):not(.bg-emerald-500):not(.bg-cyan-500):not(.bg-purple-500) {
            background-color: #ffffff !important;
            border: 2px solid #cbd5e1 !important;
            color: #090d16 !important;
        }

        .theme-light .kmap-cell span {
            color: #334155 !important;
            font-weight: 700 !important;
        }

        .theme-light .kmap-cell span.font-bold {
            color: #090d16 !important;
            font-size: 1.05rem !important;
        }

        .theme-light .kmap-cell:hover {
            border-color: #92400e !important;
            background-color: #fef3c7 !important;
        }

        .theme-light #themeToggleBtn {
            background-color: #ffffff !important;
            border: 2px solid #0284c7 !important;
            color: #0284c7 !important;
            font-weight: 700 !important;
            box-shadow: 0 2px 8px rgba(2, 132, 199, 0.15) !important;
        }

        .theme-light #studyTimerBadge button {
            background-color: #ecfdf5 !important;
            border: 2px solid #059669 !important;
            color: #064e3b !important;
            font-weight: 800 !important;
        }

        /* Proteus Wiring and Signals */
        @keyframes wireCurrentFlow {
            from {
                stroke-dashoffset: 24;
            }

            to {
                stroke-dashoffset: 0;
            }
        }

        .wire-high {
            stroke: #00ff88;
            stroke-width: 3.5;
            stroke-dasharray: 6 3;
            animation: wireCurrentFlow 0.8s linear infinite;
            filter: drop-shadow(0 0 6px rgba(0, 255, 136, 0.7));
        }

        .theme-light .wire-high {
            stroke: #059669;
            filter: drop-shadow(0 0 4px rgba(5, 150, 105, 0.6));
        }

        .wire-low {
            stroke: #334155;
            stroke-width: 2.2;
            stroke-dasharray: none;
        }

        .theme-light .wire-low {
            stroke: #94a3b8;
        }

        .led-bulb-on {
            fill: #00ff88;
            filter: drop-shadow(0 0 16px #00ff88);
        }

        .theme-light .led-bulb-on {
            fill: #059669;
            filter: drop-shadow(0 0 12px #059669);
        }

        .led-bulb-off {
            fill: #1e293b;
            stroke: #475569;
        }

        .theme-light .led-bulb-off {
            fill: #e2e8f0;
            stroke: #94a3b8;
        }

        .switch-btn-active {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(0, 245, 255, 0.25));
            border-color: #10b981;
            box-shadow: 0 0 14px rgba(16, 185, 129, 0.35);
        }

        .theme-light .switch-btn-active {
            background: #d1fae5;
            border-color: #059669;
            color: #064e3b;
            box-shadow: 0 0 12px rgba(5, 150, 105, 0.3);
        }

        .switch-btn-inactive {
            background: rgba(15, 23, 42, 0.8);
            border-color: #334155;
        }

        .theme-light .switch-btn-inactive {
            background: #f1f5f9;
            border-color: #cbd5e1;
            color: #475569;
        }

        /* K-Map Grouping Overlays */
        .kmap-cell {
            cursor: pointer;
            user-select: none;
            transition: all 0.15s ease;
        }

        .kmap-cell:hover {
            transform: scale(1.05);
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #060913;
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #0ea5e9, #a855f7);
            border-radius: 4px;
            border: 1px solid rgba(0, 245, 255, 0.2);
        }

        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #38bdf8, #ec4899);
        }

        .theme-light ::-webkit-scrollbar-track {
            background: #edf2f7;
        }

        .theme-light ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #0284c7, #7c3aed);
            border: 1px solid rgba(14, 165, 233, 0.4);
        }

        #bg3dCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 0;
            opacity: 0.95;
            transition: opacity 0.5s ease;
        }

        .theme-light #bg3dCanvas {
            opacity: 0.82;
        }
    </style>
</head>

<body class="min-h-screen flex flex-col relative selection:bg-cyan-500/40 selection:text-cyan-100">
    <!-- 3D Interactive WebGL Digital Canvas -->
    <canvas id="bg3dCanvas" class="fixed inset-0 w-full h-full pointer-events-none z-0"></canvas>
    <!-- Glowing Background Atmosphere & Ambient Light Orbs (Graceful Fallback & Depth Layer) -->
    <div class="cyber-grid-layer"></div>
    <div class="neon-glow-cyan -top-20 left-10"></div>
    <div class="neon-glow-purple top-1/4 -right-20"></div>
    <div class="neon-glow-pink top-2/3 -left-20"></div>
    <div class="neon-glow-emerald bottom-10 right-1/4"></div>


    <!-- TOP NAVIGATION BAR -->
    <header
        class="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#060913]/90 border-b border-cyan-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">

            <!-- Brand Logo -->
            <div class="flex items-center gap-3 cursor-pointer group" onclick="showSection('home')">
                <div
                    class="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-0.5 shadow-[0_0_25px_rgba(0,245,255,0.45)] group-hover:scale-105 transition duration-300">
                    <div class="w-full h-full bg-[#060913] rounded-[14px] flex items-center justify-center">
                        <span class="text-cyan-400 font-black text-lg font-mono-code">123</span>
                    </div>
                </div>
                <div>
                    <span class="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-1">
                        hitung<span class="holo-text">123</span><span
                            class="text-xs text-cyan-400 font-mono-code font-normal">.id</span>
                    </span>
                    <span
                        class="text-[10px] text-slate-400 block tracking-wider uppercase font-mono-code font-bold">Laboratorium
                        Sistem Digital</span>
                </div>
            </div>

            <!-- Header Tools & Navigation Actions -->
            <nav class="flex items-center gap-2 sm:gap-3">

                <!-- Penghitung Waktu Belajar (Study Session Timer) -->
                <div class="relative" id="studyTimerBadge">
                    <button onclick="toggleTimerDetails()"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-2 border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.25)] hover:scale-105"
                        title="Penghitung Waktu Sesi Belajar Mandiri">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span class="hidden sm:inline font-mono-code text-[11px] text-emerald-400/80">Sesi:</span>
                        <span id="studyTimeDisplay" class="font-mono-code font-bold tracking-wider">00:00:00</span>
                    </button>

                    <!-- Popover Detail Timer Belajar -->
                    <div id="studyTimerPopover"
                        class="hidden absolute right-0 mt-2 w-64 p-4 rounded-2xl bg-[#090d16] border border-emerald-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.85)] z-50 text-xs space-y-3">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                            <span class="font-bold text-white flex items-center gap-1.5">
                                <span>⏱️</span> Waktu Belajar Mandiri
                            </span>
                            <span
                                class="text-[10px] font-mono-code text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800">Aktif</span>
                        </div>
                        <div class="space-y-1.5 font-mono-code">
                            <div class="flex justify-between text-slate-400">
                                <span>Sesi Saat Ini:</span>
                                <strong id="popoverSessionTime" class="text-emerald-300">00:00:00</strong>
                            </div>
                            <div class="flex justify-between text-slate-400">
                                <span>Total Akumulasi:</span>
                                <strong id="popoverTotalTime" class="text-cyan-300">00:00:00</strong>
                            </div>
                        </div>
                        <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                            <button onclick="event.stopPropagation(); resetStudyTimer();"
                                class="text-rose-400 hover:text-rose-300 transition underline">
                                Reset Sesi
                            </button>
                            <button onclick="event.stopPropagation(); toggleTimerDetails();"
                                class="text-slate-400 hover:text-white transition">
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Tombol Pilihan Tema (Gelap / Terang) -->
                <button id="themeToggleBtn" onclick="toggleTheme()"
                    class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-cyan-500/40 bg-slate-900/90 text-cyan-300 shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:scale-105"
                    title="Ganti Tema (Gelap / Terang)">
                    <span id="themeToggleIcon" class="text-sm">🌙</span>
                    <span id="themeToggleText" class="hidden sm:inline font-mono-code text-[11px]">Mode Gelap</span>
                </button>

                <!-- Tombol Drawer 14 Modul (Akses Utama Materi) -->
                <button onclick="openDrawer()"
                    class="holo-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center gap-2.5 shadow-[0_0_25px_rgba(0,245,255,0.35)] hover:scale-105 transition"
                    title="Buka Jendela Samping 14 Modul Kuliah">
                    <svg class="w-4 h-4 text-cyan-300 animate-pulse" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <span class="font-mono-code tracking-wide">14 Modul</span>
                    <span
                        class="hidden md:inline-flex text-[10px] bg-cyan-950/90 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-700/60 font-mono-code">Buka
                        Jendela</span>
                </button>

            </nav>
        </div>
    </header>

    <!-- MAIN CONTAINER -->
    <main class="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

        <!-- ==================== BERANDA / HOME VIEW ==================== -->
        <div id="homeView" class="space-y-14">

            <!-- HERO BANNER -->
            <section class="text-center py-10 sm:py-16 relative">
                <div
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-950/40 text-cyan-300 text-xs font-mono-code mb-6 shadow-[0_0_25px_rgba(0,245,255,0.25)]">
                    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span>Platform Pembelajaran & Laboratorium Virtual Sistem Digital</span>
                </div>

                <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
                    Kuasai Logika Digital, <span class="holo-text">Laboratorium Interaktif</span>, & Visualisasi
                    Rangkaian
                </h1>
                <p class="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Media ajar komprehensif mulai dari sistem bilangan bulat & pecahan, representasi komplemen bertanda,
                    penyederhanaan aljabar Boolean, K-Map interaktif hingga 5 variabel, simulator gerbang Proteus, dan
                    kalkulator
                    aritmatika adder-subtractor bersusun.
                </p>

                <!-- Primary CTA Buttons -->
                <div class="mt-9 flex flex-wrap justify-center gap-4 items-center">
                    <button onclick="openDrawer()"
                        class="holo-btn px-8 py-4 rounded-2xl font-bold text-white shadow-[0_0_30px_rgba(0,245,255,0.35)] flex items-center gap-3 text-base hover:scale-105 transition group">
                        <svg class="w-5 h-5 text-cyan-300 group-hover:rotate-12 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M4 6h16M4 12h16M4 18h16">
                            </path>
                        </svg>
                        <span>Buka Jendela Samping (14 Modul)</span>
                        <span
                            class="bg-cyan-950/80 text-cyan-300 text-[11px] font-mono-code px-2 py-0.5 rounded-lg border border-cyan-700/60">Aktif</span>
                    </button>

                    <button onclick="openBab(1)"
                        class="px-7 py-4 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-semibold transition flex items-center gap-2 hover:scale-105 shadow-md">
                        <span>Mulai Pertemuan 01</span>
                        <span class="text-cyan-400 font-bold">➔</span>
                    </button>
                </div>

                <!-- Info Quick Note -->
                <div
                    class="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                    <span class="text-cyan-400">💡</span>
                    <span>Seluruh modul pembelajaran tersedia di <strong>Jendela Samping (14 Modul)</strong> di pojok
                        kanan atas
                        layar.</span>
                </div>
            </section>

            <!-- STATISTIK & KEUNGGULAN PLATFORM -->
            <section class="grid grid-cols-2 md:grid-cols-4 gap-4">

                <div class="holo-card p-5 rounded-2xl text-center space-y-2 border-cyan-500/25">
                    <div
                        class="w-10 h-10 mx-auto rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 text-lg">
                        📚
                    </div>
                    <div class="text-2xl sm:text-3xl font-black text-white font-mono-code">14</div>
                    <p class="text-xs font-semibold text-cyan-300 uppercase tracking-wider font-mono-code">Modul
                        Kurikulum</p>
                    <p class="text-[11px] text-slate-400">Silabus terstruktur lengkap standar perkuliahan teknik
                        informatika.</p>
                </div>

                <div class="holo-card p-5 rounded-2xl text-center space-y-2 border-purple-500/25">
                    <div
                        class="w-10 h-10 mx-auto rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 text-lg">
                        🧪
                    </div>
                    <div class="text-2xl sm:text-3xl font-black text-white font-mono-code">6+</div>
                    <p class="text-xs font-semibold text-purple-300 uppercase tracking-wider font-mono-code">
                        Laboratorium Tool</p>
                    <p class="text-[11px] text-slate-400">Kalkulator pecahan, K-Map solver, simulator Proteus & hitung
                        bersusun.
                    </p>
                </div>

                <div class="holo-card p-5 rounded-2xl text-center space-y-2 border-pink-500/25">
                    <div
                        class="w-10 h-10 mx-auto rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 text-lg">
                        📝
                    </div>
                    <div class="text-2xl sm:text-3xl font-black text-white font-mono-code">100</div>
                    <p class="text-xs font-semibold text-pink-300 uppercase tracking-wider font-mono-code">Soal Evaluasi
                    </p>
                    <p class="text-[11px] text-slate-400">20 butir per pertemuan dengan ulasan akademik & e-sertifikat
                        kelulusan.
                    </p>
                </div>

                <div class="holo-card p-5 rounded-2xl text-center space-y-2 border-emerald-500/25">
                    <div
                        class="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 text-lg">
                        ⚡
                    </div>
                    <div class="text-2xl sm:text-3xl font-black text-white font-mono-code">100%</div>
                    <p class="text-xs font-semibold text-emerald-300 uppercase tracking-wider font-mono-code">Real-Time
                        Client</p>
                    <p class="text-[11px] text-slate-400">Kalkulasi instan tanpa delay server dan tanpa perlu instalasi
                        aplikasi.
                    </p>
                </div>

            </section>

            <!-- SHOWCASE FITUR & LABORATORIUM VIRTUAL UNGGULAN -->
            <section class="space-y-6">
                <div
                    class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                        <div class="inline-flex items-center gap-2 text-xs font-mono-code text-cyan-400 mb-1">
                            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                            Eksplorasi Laboratorium Mandiri
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
                            <span>⚡</span> Fitur Laboratorium & Simulator Interaktif
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                            Setiap pertemuan dilengkapi dengan alat laboratorium digital khusus untuk membantu Anda
                            memahami konsep
                            abstrak secara visual dan presisi matematis. Akses modul melalui <strong>Jendela Samping (14
                                Modul)</strong>.
                        </p>
                    </div>
                    <button onclick="openDrawer()"
                        class="px-4 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 font-mono-code text-xs font-bold transition flex items-center gap-2 shrink-0">
                        <span>Buka Jendela Samping 14 Modul</span>
                        <span>➔</span>
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <!-- Fitur 1: Multi-Radix Converter -->
                    <div
                        class="holo-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border-cyan-500/30 group hover:border-cyan-400 transition">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <div
                                    class="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-lg font-bold">
                                    🧮
                                </div>
                                <span
                                    class="text-[10px] font-mono-code font-bold text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800">Tersedia
                                    di Modul 01</span>
                            </div>
                            <h3 class="text-lg font-bold text-white group-hover:text-cyan-300 transition">Kalkulator
                                Konversi Radiks
                                Bulat & Pecahan</h3>
                            <p class="text-xs text-slate-400 leading-relaxed">
                                Konversi bebas antara biner, desimal, oktal, dan heksadesimal dengan opsi bilangan bulat
                                maupun pecahan
                                berulang presisi tinggi.
                            </p>
                        </div>
                        <button onclick="openBab(1)"
                            class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold font-mono-code hover:text-cyan-300 transition">
                            <span>Buka Materi & Tool Pertemuan 01</span>
                            <span class="group-hover:translate-x-1 transition">➔</span>
                        </button>
                    </div>

                    <!-- Fitur 2: 2-Way Signed Converter -->
                    <div
                        class="holo-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border-purple-500/30 group hover:border-purple-400 transition">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <div
                                    class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400 text-lg font-bold">
                                    🔄
                                </div>
                                <span
                                    class="text-[10px] font-mono-code font-bold text-purple-400 bg-purple-950/70 px-2 py-0.5 rounded border border-purple-800">Tersedia
                                    di Modul 02</span>
                            </div>
                            <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition">Kalkulator
                                Komplemen
                                Bertanda 2-Arah</h3>
                            <p class="text-xs text-slate-400 leading-relaxed">
                                Konversi bolak-balik representasi MSB (Sign-Magnitude), 1's Complement, dan 2's
                                Complement lengkap
                                dengan validasi rentang bit & overflow.
                            </p>
                        </div>
                        <button onclick="openBab(2)"
                            class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-purple-400 font-semibold font-mono-code hover:text-purple-300 transition">
                            <span>Buka Materi & Tool Pertemuan 02</span>
                            <span class="group-hover:translate-x-1 transition">➔</span>
                        </button>
                    </div>

                    <!-- Fitur 3: Boolean Simplifier & Proteus Simulator -->
                    <div
                        class="holo-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border-pink-500/30 group hover:border-pink-400 transition">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <div
                                    class="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-400 text-lg font-bold">
                                    ⚡
                                </div>
                                <span
                                    class="text-[10px] font-mono-code font-bold text-pink-400 bg-pink-950/70 px-2 py-0.5 rounded border border-pink-800">Tersedia
                                    di Modul 03</span>
                            </div>
                            <h3 class="text-lg font-bold text-white group-hover:text-pink-300 transition">Aljabar
                                Boolean & Simulator
                                Gerbang Proteus</h3>
                            <p class="text-xs text-slate-400 leading-relaxed">
                                Penyederhana bentuk SOP/POS otomatis, visualisasi gerbang logika, tabel kebenaran
                                interaktif, dan
                                simulasi arus sinyal Proteus live.
                            </p>
                        </div>
                        <button onclick="openBab(3)"
                            class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-pink-400 font-semibold font-mono-code hover:text-pink-300 transition">
                            <span>Buka Materi & Tool Pertemuan 03</span>
                            <span class="group-hover:translate-x-1 transition">➔</span>
                        </button>
                    </div>

                    <!-- Fitur 4: K-Map 2-5 Variabel & Direct Minterm Solver -->
                    <div
                        class="holo-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border-amber-500/30 group hover:border-amber-400 transition">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <div
                                    class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 text-lg font-bold">
                                    🗺️
                                </div>
                                <span
                                    class="text-[10px] font-mono-code font-bold text-amber-400 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800">Tersedia
                                    di Modul 04</span>
                            </div>
                            <h3 class="text-lg font-bold text-white group-hover:text-amber-300 transition">Penyederhana
                                K-Map
                                Interaktif (2 s.d. 5 Variabel)</h3>
                            <p class="text-xs text-slate-400 leading-relaxed">
                                Kisi peta Karnaugh Gray Code 2, 3, 4, dan 5 variabel dengan grouping 2ⁿ otomatis,
                                penanganan don't care
                                (X), serta solver minterm langsung Σm.
                            </p>
                        </div>
                        <button onclick="openBab(4)"
                            class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold font-mono-code hover:text-amber-300 transition">
                            <span>Buka Materi & Tool Pertemuan 04</span>
                            <span class="group-hover:translate-x-1 transition">➔</span>
                        </button>
                    </div>

                    <!-- Fitur 5: Vertical Adder/Subtractor Arithmetic -->
                    <div
                        class="holo-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border-emerald-500/30 group hover:border-emerald-400 transition">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <div
                                    class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 text-lg font-bold">
                                    ➕
                                </div>
                                <span
                                    class="text-[10px] font-mono-code font-bold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800">Tersedia
                                    di Modul 05</span>
                            </div>
                            <h3 class="text-lg font-bold text-white group-hover:text-emerald-300 transition">Adder &
                                Subtractor Hitung
                                Bersusun (Carry/Borrow)</h3>
                            <p class="text-xs text-slate-400 leading-relaxed">
                                Kalkulator penjumlahan & pengurangan biner bersusun kolom demi kolom dengan analisis
                                carry/borrow,
                                auto-convert radiks, serta tabel Half/Full Adder.
                            </p>
                        </div>
                        <button onclick="openBab(5)"
                            class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-semibold font-mono-code hover:text-emerald-300 transition">
                            <span>Buka Materi & Tool Pertemuan 05</span>
                            <span class="group-hover:translate-x-1 transition">➔</span>
                        </button>
                    </div>

                    <!-- Fitur 6: Academic Quiz & E-Certificate -->
                    <div
                        class="holo-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border-cyan-500/30 group hover:border-cyan-400 transition">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <div
                                    class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 text-lg font-bold">
                                    🏆
                                </div>
                                <span
                                    class="text-[10px] font-mono-code font-bold text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800">Setiap
                                    Pertemuan</span>
                            </div>
                            <h3 class="text-lg font-bold text-white group-hover:text-cyan-300 transition">Kuis Evaluasi
                                20 Soal &
                                E-Sertifikat Kelulusan</h3>
                            <p class="text-xs text-slate-400 leading-relaxed">
                                Uji pemahaman komprehensif dengan 20 butir soal terstandarisasi, pembahasan ilmiah
                                instan, dan unduh
                                sertifikat resmi berformat PDF & PNG.
                            </p>
                        </div>
                        <button onclick="openDrawer()"
                            class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold font-mono-code hover:text-cyan-300 transition">
                            <span>Pilih Modul di Jendela Samping</span>
                            <span class="group-hover:translate-x-1 transition">➔</span>
                        </button>
                    </div>

                </div>
            </section>

            <!-- PANDUAN LANGKAH BELAJAR EFISIEN -->
            <section
                class="holo-card p-8 rounded-3xl border-purple-500/30 bg-gradient-to-br from-slate-900/90 via-[#0d1428]/80 to-purple-950/20 space-y-6">
                <div class="text-center max-w-2xl mx-auto space-y-2">
                    <span class="text-xs font-mono-code text-purple-400 uppercase tracking-widest font-bold">Metode
                        Belajar
                        Interaktif</span>
                    <h3 class="text-2xl font-black text-white">Bagaimana Memulai Pembelajaran di hitung123.id?</h3>
                    <p class="text-xs sm:text-sm text-slate-400">Ikuti tiga langkah sederhana berikut untuk
                        memaksimalkan
                        penguasaan materi sistem digital Anda.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">

                    <div
                        class="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3 relative group hover:border-cyan-400/60 transition">
                        <div
                            class="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 font-mono-code font-black flex items-center justify-center text-sm">
                            01
                        </div>
                        <h4 class="font-bold text-white text-base">Buka Jendela Samping (14 Modul)</h4>
                        <p class="text-xs text-slate-400 leading-relaxed">
                            Klik tombol <strong>"14 Modul"</strong> di pojok kanan atas atau tombol beranda untuk
                            melihat daftar
                            seluruh pertemuan kuliah.
                        </p>
                    </div>

                    <div
                        class="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3 relative group hover:border-purple-400/60 transition">
                        <div
                            class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-400 font-mono-code font-black flex items-center justify-center text-sm">
                            02
                        </div>
                        <h4 class="font-bold text-white text-base">Eksplorasi Teori & Alat Hitung</h4>
                        <p class="text-xs text-slate-400 leading-relaxed">
                            Pelajari konsep mendalam, gunakan kalkulator konversi, K-Map solver, simulator Proteus, dan
                            kalkulator
                            aritmatika secara live.
                        </p>
                    </div>

                    <div
                        class="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3 relative group hover:border-pink-400/60 transition">
                        <div
                            class="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-400/40 text-pink-400 font-mono-code font-black flex items-center justify-center text-sm">
                            03
                        </div>
                        <h4 class="font-bold text-white text-base">Uji Kuis 20 Soal & Cetak Sertifikat</h4>
                        <p class="text-xs text-slate-400 leading-relaxed">
                            Tuntaskan kuis evaluasi 20 soal untuk menguji daya serap Anda, pelajari ulasan akademik, dan
                            unduh
                            sertifikat kelulusan resmi.
                        </p>
                    </div>

                </div>

                <div class="text-center pt-2">
                    <button onclick="openDrawer()"
                        class="holo-btn px-7 py-3 rounded-xl font-bold text-white text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg hover:scale-105 transition">
                        <span>Buka Jendela 14 Modul Sekarang</span>
                        <span>➔</span>
                    </button>
                </div>
            </section>

            <!-- QUICK ACCESS GOOGLE DRIVE REPOSITORY BANNER -->
            <section
                class="holo-card p-6 sm:p-8 rounded-3xl border-emerald-500/35 bg-gradient-to-r from-slate-900/90 via-emerald-950/20 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div class="space-y-1.5 text-center sm:text-left">
                    <div class="inline-flex items-center gap-2 text-xs font-mono-code text-emerald-400">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Folder Materi Resmi di Google Drive
                    </div>
                    <h3 class="text-xl sm:text-2xl font-black text-white">Butuh E-Book, Slide Kuliah & Modul Lengkap?
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                        Dapatkan seluruh dokumen PDF resmi, silabus perkuliahan lengkap, dan arsip latihan soal sistem
                        digital
                        melalui Google Drive bersama.
                    </p>
                </div>
                <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank"
                    rel="noopener noreferrer"
                    class="holo-btn-green px-7 py-4 rounded-xl text-xs sm:text-sm font-bold text-white whitespace-nowrap flex items-center gap-2.5 shadow-lg hover:scale-105 transition">
                    <svg class="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                    </svg>
                    <span>Buka Folder Google Drive ↗</span>
                </a>
            </section>

            <!-- ==================== VIDEO MOTIVASI BELAJAR (BAGIAN PALING BAWAH BERANDA) ==================== -->
            <section class="space-y-6 pt-2">
                <div
                    class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                        <div class="inline-flex items-center gap-2 text-xs font-mono-code text-cyan-400 mb-1.5">
                            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Ruang Inspirasi & Motivasi Belajar
                        </div>
                        <h3 class="text-2xl font-black text-white">Video Motivasi & Produktivitas Mahasiswa</h3>
                        <p class="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                            Pilih dan putar video inspiratif di bawah ini untuk menjaga semangat, fokus belajar logika,
                            dan memulihkan
                            energi berpikir Anda.
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <span
                            class="text-xs font-mono-code text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-800/80 font-bold">
                            6 Video Pilihan
                        </span>
                        <div class="flex items-center gap-1.5 ml-1">
                            <button type="button" onclick="scrollMotivationVideos(-1)"
                                class="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 flex items-center justify-center text-lg font-bold transition shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                                title="Geser ke kiri">
                                ‹
                            </button>
                            <button type="button" onclick="scrollMotivationVideos(1)"
                                class="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 flex items-center justify-center text-lg font-bold transition shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                                title="Geser ke kanan">
                                ›
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Carousel Container with Smooth Horizontal Scroll & Snapping -->
                <div class="relative">
                    <div id="motivationVideoCarousel"
                        class="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth custom-carousel-scroll px-0.5">

                        <!-- Video Card 1: FilosofiTv (CiL6mmCBaKQ) -->
                        <div
                            class="holo-card p-5 sm:p-6 rounded-2xl border-cyan-500/30 flex flex-col justify-between space-y-4 hover:border-cyan-400 transition w-[85vw] max-w-[360px] sm:w-[360px] md:w-[380px] shrink-0 snap-start h-full">
                            <div class="space-y-3">
                                <div id="videoSlot_1"
                                    class="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group bg-black shadow-lg border border-slate-800"
                                    onclick="playMotivationVideo('videoSlot_1', 'CiL6mmCBaKQ')"
                                    title="Klik untuk memutar video langsung">
                                    <img src="https://i.ytimg.com/vi/CiL6mmCBaKQ/maxresdefault.jpg"
                                        onerror="this.src='https://i.ytimg.com/vi/CiL6mmCBaKQ/hqdefault.jpg'"
                                        alt="SEMAKIN KAMU TAKUT, SEMAKIN DEKAT KAMU KE SUKSES"
                                        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        loading="lazy" />
                                    <div
                                        class="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition flex items-center justify-center">
                                        <div
                                            class="w-16 h-11 rounded-2xl bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.7)] group-hover:scale-110 transition duration-300">
                                            <svg class="w-6 h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-sm text-[10px] font-mono-code text-white flex items-center gap-1.5 border border-white/10">
                                        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                        <span>Klik untuk Putar</span>
                                    </div>
                                </div>
                                <div class="space-y-1.5 pt-1">
                                    <div class="flex items-center justify-between text-xs">
                                        <span
                                            class="text-[10px] font-mono-code font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">Mindset
                                            Sukses</span>
                                        <span class="text-slate-400 text-[11px] font-mono-code">FilosofiTv</span>
                                    </div>
                                    <h4
                                        class="font-bold text-white text-base leading-snug hover:text-cyan-300 transition line-clamp-2 min-h-[3rem]">
                                        SEMAKIN KAMU TAKUT, SEMAKIN DEKAT KAMU KE SUKSES
                                    </h4>
                                    <p class="text-xs text-slate-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                        Jangan biarkan keraguan menghalangi potensimu. Pelajari cara mengubah rasa takut
                                        menjadi dorongan
                                        menuju pencapaian terbaik.
                                    </p>
                                </div>
                            </div>
                            <button onclick="playMotivationVideo('videoSlot_1', 'CiL6mmCBaKQ')"
                                class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold font-mono-code hover:text-cyan-300 transition cursor-pointer">
                                <span>Putar di Website</span>
                                <span class="group-hover:translate-x-1 transition">▶</span>
                            </button>
                        </div>

                        <!-- Video Card 2: Creativera (SgcDuK4P27U) -->
                        <div
                            class="holo-card p-5 sm:p-6 rounded-2xl border-purple-500/30 flex flex-col justify-between space-y-4 hover:border-purple-400 transition w-[85vw] max-w-[360px] sm:w-[360px] md:w-[380px] shrink-0 snap-start h-full">
                            <div class="space-y-3">
                                <div id="videoSlot_2"
                                    class="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group bg-black shadow-lg border border-slate-800"
                                    onclick="playMotivationVideo('videoSlot_2', 'SgcDuK4P27U')"
                                    title="Klik untuk memutar video langsung">
                                    <img src="https://i.ytimg.com/vi/SgcDuK4P27U/maxresdefault.jpg"
                                        onerror="this.src='https://i.ytimg.com/vi/SgcDuK4P27U/hqdefault.jpg'"
                                        alt="CARA KELUAR DARI HIDUP GINI-GINI AJA"
                                        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        loading="lazy" />
                                    <div
                                        class="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition flex items-center justify-center">
                                        <div
                                            class="w-16 h-11 rounded-2xl bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.7)] group-hover:scale-110 transition duration-300">
                                            <svg class="w-6 h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-sm text-[10px] font-mono-code text-white flex items-center gap-1.5 border border-white/10">
                                        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                        <span>Klik untuk Putar</span>
                                    </div>
                                </div>
                                <div class="space-y-1.5 pt-1">
                                    <div class="flex items-center justify-between text-xs">
                                        <span
                                            class="text-[10px] font-mono-code font-bold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800">Pengembangan
                                            Diri</span>
                                        <span class="text-slate-400 text-[11px] font-mono-code">Creativera™</span>
                                    </div>
                                    <h4
                                        class="font-bold text-white text-base leading-snug hover:text-purple-300 transition line-clamp-2 min-h-[3rem]">
                                        CARA KELUAR DARI HIDUP GINI-GINI AJA - INSIGHTS 101
                                    </h4>
                                    <p class="text-xs text-slate-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                        Langkah terstruktur dan strategi psikologis untuk keluar dari zona nyaman dan
                                        meningkatkan
                                        produktivitas belajar harian.
                                    </p>
                                </div>
                            </div>
                            <button onclick="playMotivationVideo('videoSlot_2', 'SgcDuK4P27U')"
                                class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-purple-400 font-semibold font-mono-code hover:text-purple-300 transition cursor-pointer">
                                <span>Putar di Website</span>
                                <span class="group-hover:translate-x-1 transition">▶</span>
                            </button>
                        </div>

                        <!-- Video Card 3: SUARA BERKELAS (TmqXXQg8WXM) -->
                        <div
                            class="holo-card p-5 sm:p-6 rounded-2xl border-amber-500/30 flex flex-col justify-between space-y-4 hover:border-amber-400 transition w-[85vw] max-w-[360px] sm:w-[360px] md:w-[380px] shrink-0 snap-start h-full">
                            <div class="space-y-3">
                                <div id="videoSlot_3"
                                    class="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group bg-black shadow-lg border border-slate-800"
                                    onclick="playMotivationVideo('videoSlot_3', 'TmqXXQg8WXM')"
                                    title="Klik untuk memutar video langsung">
                                    <img src="https://i.ytimg.com/vi/TmqXXQg8WXM/maxresdefault.jpg"
                                        onerror="this.src='https://i.ytimg.com/vi/TmqXXQg8WXM/hqdefault.jpg'"
                                        alt="Neurosurgeon: Lebih Kenal OTAKMU SENDIRI!"
                                        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        loading="lazy" />
                                    <div
                                        class="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition flex items-center justify-center">
                                        <div
                                            class="w-16 h-11 rounded-2xl bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.7)] group-hover:scale-110 transition duration-300">
                                            <svg class="w-6 h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-sm text-[10px] font-mono-code text-white flex items-center gap-1.5 border border-white/10">
                                        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                        <span>Klik untuk Putar</span>
                                    </div>
                                </div>
                                <div class="space-y-1.5 pt-1">
                                    <div class="flex items-center justify-between text-xs">
                                        <span
                                            class="text-[10px] font-mono-code font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">Neurosains
                                            & Fokus</span>
                                        <span class="text-slate-400 text-[11px] font-mono-code">SUARA BERKELAS</span>
                                    </div>
                                    <h4
                                        class="font-bold text-white text-base leading-snug hover:text-amber-300 transition line-clamp-2 min-h-[3rem]">
                                        Neurosurgeon: 59 Menit Berharga Untuk Lebih Kenal OTAKMU SENDIRI!
                                    </h4>
                                    <p class="text-xs text-slate-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                        Wawasan mendalam dokter bedah saraf tentang neuroplastisitas, daya konsentrasi,
                                        dan optimalisasi
                                        memori saat belajar teknik.
                                    </p>
                                </div>
                            </div>
                            <button onclick="playMotivationVideo('videoSlot_3', 'TmqXXQg8WXM')"
                                class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold font-mono-code hover:text-amber-300 transition cursor-pointer">
                                <span>Putar di Website</span>
                                <span class="group-hover:translate-x-1 transition">▶</span>
                            </button>
                        </div>

                        <!-- Video Card 4: TS Media (kjdizd9iZtk) -->
                        <div
                            class="holo-card p-5 sm:p-6 rounded-2xl border-pink-500/30 flex flex-col justify-between space-y-4 hover:border-pink-400 transition w-[85vw] max-w-[360px] sm:w-[360px] md:w-[380px] shrink-0 snap-start h-full">
                            <div class="space-y-3">
                                <div id="videoSlot_4"
                                    class="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group bg-black shadow-lg border border-slate-800"
                                    onclick="playMotivationVideo('videoSlot_4', 'kjdizd9iZtk')"
                                    title="Klik untuk memutar video langsung">
                                    <img src="https://i.ytimg.com/vi/kjdizd9iZtk/maxresdefault.jpg"
                                        onerror="this.src='https://i.ytimg.com/vi/kjdizd9iZtk/hqdefault.jpg'"
                                        alt="MENGENAL OTAK KITA LEBIH JAUH"
                                        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        loading="lazy" />
                                    <div
                                        class="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition flex items-center justify-center">
                                        <div
                                            class="w-16 h-11 rounded-2xl bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.7)] group-hover:scale-110 transition duration-300">
                                            <svg class="w-6 h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-sm text-[10px] font-mono-code text-white flex items-center gap-1.5 border border-white/10">
                                        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                        <span>Klik untuk Putar</span>
                                    </div>
                                </div>
                                <div class="space-y-1.5 pt-1">
                                    <div class="flex items-center justify-between text-xs">
                                        <span
                                            class="text-[10px] font-mono-code font-bold text-pink-400 bg-pink-950/60 px-2 py-0.5 rounded border border-pink-800">Kesehatan
                                            Belajar</span>
                                        <span class="text-slate-400 text-[11px] font-mono-code">TS Media (dr. Ryan
                                            Keswani)</span>
                                    </div>
                                    <h4
                                        class="font-bold text-white text-base leading-snug hover:text-pink-300 transition line-clamp-2 min-h-[3rem]">
                                        MENGENAL OTAK KITA LEBIH JAUH, BERSAMA DR RYAN KESWANI
                                    </h4>
                                    <p class="text-xs text-slate-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                        Menjaga kebugaran neurologis, mengatasi cognitive fatigue saat belajar materi
                                        rumit, dan tips
                                        konsentrasi harian.
                                    </p>
                                </div>
                            </div>
                            <button onclick="playMotivationVideo('videoSlot_4', 'kjdizd9iZtk')"
                                class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-pink-400 font-semibold font-mono-code hover:text-pink-300 transition cursor-pointer">
                                <span>Putar di Website</span>
                                <span class="group-hover:translate-x-1 transition">▶</span>
                            </button>
                        </div>

                        <!-- Video Card 5: Felix Siauw (mULwrp4Rklk) -->
                        <div
                            class="holo-card p-5 sm:p-6 rounded-2xl border-indigo-500/30 flex flex-col justify-between space-y-4 hover:border-indigo-400 transition w-[85vw] max-w-[360px] sm:w-[360px] md:w-[380px] shrink-0 snap-start h-full">
                            <div class="space-y-3">
                                <div id="videoSlot_5"
                                    class="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group bg-black shadow-lg border border-slate-800"
                                    onclick="playMotivationVideo('videoSlot_5', 'mULwrp4Rklk')"
                                    title="Klik untuk memutar video langsung">
                                    <img src="https://i.ytimg.com/vi/mULwrp4Rklk/maxresdefault.jpg"
                                        onerror="this.src='https://i.ytimg.com/vi/mULwrp4Rklk/hqdefault.jpg'"
                                        alt="Melatih Otak Untuk Berfikir Kritis"
                                        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        loading="lazy" />
                                    <div
                                        class="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition flex items-center justify-center">
                                        <div
                                            class="w-16 h-11 rounded-2xl bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.7)] group-hover:scale-110 transition duration-300">
                                            <svg class="w-6 h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-sm text-[10px] font-mono-code text-white flex items-center gap-1.5 border border-white/10">
                                        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                        <span>Klik untuk Putar</span>
                                    </div>
                                </div>
                                <div class="space-y-1.5 pt-1">
                                    <div class="flex items-center justify-between text-xs">
                                        <span
                                            class="text-[10px] font-mono-code font-bold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800">Berpikir
                                            Kritis</span>
                                        <span class="text-slate-400 text-[11px] font-mono-code">Felix Siauw</span>
                                    </div>
                                    <h4
                                        class="font-bold text-white text-base leading-snug hover:text-indigo-300 transition line-clamp-2 min-h-[3rem]">
                                        Melatih Otak Untuk Berfikir Kritis
                                    </h4>
                                    <p class="text-xs text-slate-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                        Membangun penalaran deduktif dan logika analitis yang kokoh dalam menghadapi
                                        tantangan studi serta
                                        kehidupan modern.
                                    </p>
                                </div>
                            </div>
                            <button onclick="playMotivationVideo('videoSlot_5', 'mULwrp4Rklk')"
                                class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-semibold font-mono-code hover:text-indigo-300 transition cursor-pointer">
                                <span>Putar di Website</span>
                                <span class="group-hover:translate-x-1 transition">▶</span>
                            </button>
                        </div>

                        <!-- Video Card 6: Pertajam Pola Pikir (IEBVP4hx63A) -->
                        <div
                            class="holo-card p-5 sm:p-6 rounded-2xl border-emerald-500/30 flex flex-col justify-between space-y-4 hover:border-emerald-400 transition w-[85vw] max-w-[360px] sm:w-[360px] md:w-[380px] shrink-0 snap-start h-full">
                            <div class="space-y-3">
                                <div id="videoSlot_6"
                                    class="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group bg-black shadow-lg border border-slate-800"
                                    onclick="playMotivationVideo('videoSlot_6', 'IEBVP4hx63A')"
                                    title="Klik untuk memutar video langsung">
                                    <img src="https://i.ytimg.com/vi/IEBVP4hx63A/maxresdefault.jpg"
                                        onerror="this.src='https://i.ytimg.com/vi/IEBVP4hx63A/hqdefault.jpg'"
                                        alt="7 Cara Ilmiah Memperbaiki Otak"
                                        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        loading="lazy" />
                                    <div
                                        class="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition flex items-center justify-center">
                                        <div
                                            class="w-16 h-11 rounded-2xl bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.7)] group-hover:scale-110 transition duration-300">
                                            <svg class="w-6 h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-sm text-[10px] font-mono-code text-white flex items-center gap-1.5 border border-white/10">
                                        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                        <span>Klik untuk Putar</span>
                                    </div>
                                </div>
                                <div class="space-y-1.5 pt-1">
                                    <div class="flex items-center justify-between text-xs">
                                        <span
                                            class="text-[10px] font-mono-code font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">Produktivitas
                                            Ilmiah</span>
                                        <span class="text-slate-400 text-[11px] font-mono-code">Pertajam Pola
                                            Pikir</span>
                                    </div>
                                    <h4
                                        class="font-bold text-white text-base leading-snug hover:text-emerald-300 transition line-clamp-2 min-h-[3rem]">
                                        7 Cara Ilmiah Memperbaiki Otak Sebelum Semakin Pasif
                                    </h4>
                                    <p class="text-xs text-slate-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                        Metode sains neuroplastisitas teruji untuk meningkatkan fungsi kognitif, daya
                                        ingat, dan fokus saat
                                        belajar sistem komputasi.
                                    </p>
                                </div>
                            </div>
                            <button onclick="playMotivationVideo('videoSlot_6', 'IEBVP4hx63A')"
                                class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-semibold font-mono-code hover:text-emerald-300 transition cursor-pointer">
                                <span>Putar di Website</span>
                                <span class="group-hover:translate-x-1 transition">▶</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </div>


        <!-- ==================== MODULE / CHAPTER DETAIL VIEW ==================== -->
        <div id="moduleView" class="hidden space-y-8">

            <!-- Module Navigation Top Bar -->
            <div
                class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">

                <!-- Kembali ke Beranda -->
                <button onclick="showSection('home')"
                    class="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-2 transition hover:scale-105">
                    <span>←</span>
                    <span>Beranda Utama</span>
                </button>

                <!-- Chapter Active Badge & Timer -->
                <div class="flex items-center gap-3">
                    <span id="modBadge"
                        class="text-xs font-mono-code font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-800">
                        PERTEMUAN 01 • SISTEM DIGITAL
                    </span>
                    <div
                        class="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono-code bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                        <span>⏱️ Sesi:</span>
                        <span id="modStudyClock" class="text-emerald-400 font-bold">00:00:00</span>
                    </div>
                </div>

                <!-- Prev / Next Chapter Buttons -->
                <div class="flex items-center gap-2">
                    <button id="topPrevBtn" onclick="navigateChapter(-1)"
                        class="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition disabled:opacity-30 disabled:cursor-not-allowed">
                        <span>‹</span>
                        <span>Bab Sebelumnya</span>
                    </button>
                    <button id="topNextBtn" onclick="navigateChapter(1)"
                        class="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition disabled:opacity-30 disabled:cursor-not-allowed">
                        <span>Bab Selanjutnya</span>
                        <span>›</span>
                    </button>
                </div>

            </div>

            <!-- DYNAMIC CONTENT HOLDER FOR CHAPTERS -->
            <div id="modContent" class="space-y-8">
                <!-- Rendered by JavaScript: renderBab1, renderBab2, renderBab3, renderBab4, renderBab5 -->
            </div>

            <!-- Quick Switcher Bar at Bottom of Module -->
            <div
                class="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span class="text-slate-400 font-mono-code">Lompat Cepat ke Pertemuan:</span>
                <div class="flex flex-wrap gap-2">
                    <button onclick="openBab(1)"
                        class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white font-mono-code font-bold">Bab
                        1</button>
                    <button onclick="openBab(2)"
                        class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-purple-400 text-slate-300 hover:text-white font-mono-code font-bold">Bab
                        2</button>
                    <button onclick="openBab(3)"
                        class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-pink-400 text-slate-300 hover:text-white font-mono-code font-bold">Bab
                        3</button>
                    <button onclick="openBab(4)"
                        class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-300 hover:text-white font-mono-code font-bold">Bab
                        4</button>
                    <button onclick="openBab(5)"
                        class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-white font-mono-code font-bold">Bab
                        5</button>
                </div>
            </div>

        </div>

    </main>

    <!-- ==================== DRAWER SILABUS 14 MODUL ==================== -->
    <div id="drawerOverlay" onclick="closeDrawer()"
        class="hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm transition-opacity duration-300"></div>

    <div id="curriculumDrawer"
        class="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[460px] bg-[#090d16] border-l border-cyan-500/30 shadow-[-10px_0_40px_rgba(0,0,0,0.8)] transform translate-x-full transition-transform duration-300 flex flex-col p-6 overflow-hidden">

        <!-- Drawer Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                    <span>📚</span> Silabus 14 Modul Kuliah
                </h3>
                <p class="text-xs text-slate-400">Pertemuan 01 – 05 Aktif & Terbuka</p>
            </div>
            <button onclick="closeDrawer()"
                class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 hover:border-rose-500 text-slate-400 hover:text-rose-400 flex items-center justify-center text-sm font-bold transition cursor-pointer">
                ✕
            </button>
        </div>

        <!-- Tautan Repositori Materi Lengkap Google Drive di Drawer -->
        <div class="pt-4">
            <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank"
                rel="noopener noreferrer"
                class="p-3 rounded-xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/40 border border-emerald-500/40 hover:border-emerald-400 flex items-center justify-between text-xs transition group shadow-md">
                <div class="flex items-center gap-2.5">
                    <div
                        class="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold text-sm">
                        📁
                    </div>
                    <div>
                        <b class="text-white block group-hover:text-emerald-300 text-xs">Folder Google Drive Materi
                            Lengkap</b>
                        <span class="text-[10px] text-slate-400">Slide Kuliah, E-Book & Rangkuman Resmi</span>
                    </div>
                </div>
                <span class="text-emerald-400 font-bold text-sm group-hover:translate-x-1 transition">↗</span>
            </a>
        </div>

        <!-- Drawer Body: Scrollable Chapters List -->
        <div class="flex-grow overflow-y-auto my-4 pr-1 space-y-3" id="chaptersContainer">
            <!-- Cards rendered dynamically via JavaScript -->
        </div>

        <!-- Drawer Footer -->
        <div class="pt-3 border-t border-slate-800 text-center">
            <span class="text-[11px] text-slate-500 font-mono-code">hitung123.id © 2026 • Kurikulum Sistem Digital
                Modern</span>
        </div>

    </div>

    <!-- ==================== MODAL KUIS MINGGUAN (20 BUTIR SOAL) ==================== -->
    <div id="quizModal"
        class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-300">
        <div
            class="holo-card max-w-2xl w-full p-6 sm:p-8 rounded-3xl border-cyan-500/40 bg-[#090d16] shadow-[0_0_50px_rgba(0,245,255,0.25)] space-y-6 max-h-[90vh] overflow-y-auto">

            <!-- Quiz Header -->
            <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                    <span id="quizChapterBadge"
                        class="text-[10px] font-mono-code text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">Kuis
                        Pekan 1</span>
                    <h3 id="quizTitle" class="text-lg font-bold text-white mt-1">Uji Pemahaman Sistem Digital (20 Soal)
                    </h3>
                </div>
                <button onclick="closeQuizModal()"
                    class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 hover:border-rose-500 text-slate-400 hover:text-rose-400 flex items-center justify-center text-sm font-bold transition cursor-pointer">
                    ✕
                </button>
            </div>

            <!-- State 1: Input Nama Mahasiswa / Mulai Kuis -->
            <div id="quizStartView" class="space-y-4">
                <div
                    class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
                    <p>Kuis ini terdiri atas <strong>20 butir soal pilihan ganda</strong> dengan batas kelulusan
                        <strong>skor
                            minimum 70</strong>.
                    </p>
                    <p>Setelah selesai, Anda akan menerima analisis kunci jawaban lengkap dan dapat mengunduh
                        <strong>Sertifikat
                            Kompetensi Resmi (PDF & PNG)</strong> beridentitas Anda.
                    </p>
                </div>

                <div>
                    <label class="text-xs font-semibold text-slate-300 block mb-1">Nama Lengkap Mahasiswa / Peserta
                        (untuk
                        Sertifikat):</label>
                    <input type="text" id="quizStudentNameInput" placeholder="Masukkan nama lengkap Anda..."
                        class="w-full bg-slate-950 border border-cyan-500/40 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-cyan-200 font-semibold font-mono-code focus:outline-none" />
                </div>

                <button onclick="startActualQuiz()"
                    class="w-full holo-btn py-3 rounded-xl font-bold text-white text-sm shadow-lg flex items-center justify-center gap-2">
                    <span>🚀 Mulai Mengerjakan Kuis (20 Soal)</span>
                </button>
            </div>

            <!-- State 2: Area Mengerjakan Soal Aktif -->
            <div id="quizActiveView" class="hidden space-y-4">

                <!-- Progress Bar & Status -->
                <div class="space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-mono-code text-slate-400">
                        <span id="quizProgressText">Soal 1 dari 20</span>
                        <span id="quizScoreText" class="text-cyan-300 font-bold">Skor Sementara: 0</span>
                    </div>
                    <div class="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div id="quizProgressBar"
                            class="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300"
                            style="width: 5%">
                        </div>
                    </div>
                </div>

                <!-- Kartu Pertanyaan & Pilihan Jawaban -->
                <div id="quizCard"
                    class="space-y-4 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 min-h-[220px]">
                    <!-- Question and Options rendered by renderCurrentQuestion() -->
                </div>

                <!-- Feedback & Ulasan Penjelasan Jawaban -->
                <div id="quizFeedback" class="text-xs p-3.5 rounded-xl hidden">
                </div>

                <!-- Tombol Lanjut -->
                <div class="flex justify-end pt-2">
                    <button id="nextQuestionBtn" onclick="nextQuizQuestion()" disabled
                        class="holo-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white disabled:opacity-40 disabled:cursor-not-allowed">
                        Soal Selanjutnya ➔
                    </button>
                </div>

            </div>

            <!-- State 3: Hasil Kuis, Rapor Nilai & Unduh Sertifikat -->
            <div id="quizResultView" class="hidden space-y-6">

                <div class="p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 text-center space-y-3">
                    <div
                        class="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-3xl mx-auto shadow-[0_0_20px_rgba(0,245,255,0.4)]">
                        🏆
                    </div>
                    <h4 class="text-xl font-black text-white" id="quizResultStudentGreeting">Selamat! Kuis Telah Selesai
                    </h4>
                    <div class="text-4xl font-black holo-text font-mono-code" id="quizFinalScoreDisplay">100 / 100</div>
                    <p class="text-xs text-slate-300 max-w-md mx-auto" id="quizFinalFeedbackText">
                        Anda telah menyelesaikan 20 soal kuis dengan pemahaman yang luar biasa.
                    </p>
                </div>

                <!-- Tombol Unduh Sertifikat PDF & PNG -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button onclick="downloadCertificatePDF()"
                        class="holo-btn-green py-3 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition">
                        <svg class="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                        </svg>
                        <span>Unduh Sertifikat PDF Resmi</span>
                    </button>
                    <button onclick="downloadCertificatePNG()"
                        class="holo-btn py-3 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition">
                        <svg class="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        </svg>
                        <span>Unduh Gambar Sertifikat PNG</span>
                    </button>
                </div>

                <!-- Review Pembahasan Soal-soal Kuis -->
                <div class="space-y-3 pt-2 border-t border-slate-800">
                    <div class="flex items-center justify-between">
                        <h5 class="font-bold text-white text-sm flex items-center gap-1.5">
                            <span>💡</span> Pembahasan & Analisis Soal
                        </h5>
                        <div class="flex items-center gap-1 text-[11px] font-mono-code">
                            <button onclick="filterQuizReview('ALL')"
                                class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white"
                                id="filterRev_ALL">Semua
                                (20)</button>
                            <button onclick="filterQuizReview('WRONG')"
                                class="px-2 py-0.5 rounded bg-slate-900 text-rose-300 hover:text-white"
                                id="filterRev_WRONG">Salah</button>
                            <button onclick="filterQuizReview('CORRECT')"
                                class="px-2 py-0.5 rounded bg-slate-900 text-emerald-300 hover:text-white"
                                id="filterRev_CORRECT">Benar</button>
                        </div>
                    </div>

                    <div id="quizReviewContainer" class="space-y-3 max-h-72 overflow-y-auto pr-1">
                        <!-- Review items rendered by renderQuizReview() -->
                    </div>
                </div>

                <div class="flex justify-between items-center pt-2">
                    <button onclick="restartCurrentQuiz()" class="text-xs text-cyan-400 hover:underline font-mono-code">
                        🔄 Ulangi Kuis
                    </button>
                    <button onclick="closeQuizModal()"
                        class="px-4 py-2 rounded-xl bg-slate-900 text-xs font-bold text-slate-300 hover:text-white border border-slate-700">
                        Tutup Jendela
                    </button>
                </div>

            </div>

        </div>
    </div>


    <script>

        /* ==========================================================
           DATA 14 PERTEMUAN (PERTEMUAN 1 S.D. 5 AKTIF LENGKAP)
           ========================================================== */
        const CHAPTERS = [
            {
                id: 1,
                title: "Pengantar Sistem Digital & Sistem Bilangan",
                sub: "Sinyal Diskrit, Aplikasi Nyata, Konversi Radiks Bulat & Pecahan (Biner, Desimal, Oktal, Heksa)",
                active: true,
                tag: "Pertemuan 01"
            },
            {
                id: 2,
                title: "Metode Representasi Bilangan Negatif",
                sub: "MSB (Sign-Magnitude), 1's Complement, 2's Complement (C2), Rentang & Konversi Bolak-Balik",
                active: true,
                tag: "Pertemuan 02"
            },
            {
                id: 3,
                title: "Aljabar Boolean, Gerbang Logika & Simulator Proteus",
                sub: "10 Hukum Boolean, Penyederhana SOP/POS + Diagram Gerbang, Tabel Kebenaran Otomatis, & Simulator Alur Proteus",
                active: true,
                tag: "Pertemuan 03"
            },
            {
                id: 4,
                title: "Peta Karnaugh (K-Map 2–5 Variabel)",
                sub: "Kisi 2D Gray Code, Grouping 2ⁿ, Don't Care (X), Solver Notasi Minterm Langsung Σm, & Prime Implicants",
                active: true,
                tag: "Pertemuan 04"
            },
            {
                id: 5,
                title: "Rangkaian Adder & Subtractor",
                sub: "Half/Full Adder & Subtractor, Kalkulator Hitung Bersusun (Carry/Borrow) + Auto-Convert Radiks, & Analisis Gerbang",
                active: true,
                tag: "Pertemuan 05"
            },
            { id: 6, title: "Propagasi & Statik Hazards", sub: "Materi Belum Diunggah", active: false, tag: "Pertemuan 06" },
            { id: 7, title: "Latch & Clocking Digital", sub: "Materi Belum Diunggah", active: false, tag: "Pertemuan 07" },
            { id: 8, title: "Flip-Flop & Analisis Waktu", sub: "Materi Belum Diunggah", active: false, tag: "Pertemuan 08" },
            { id: 9, title: "Register & Shift Register", sub: "Materi Belum Diunggah", active: false, tag: "Pertemuan 09" },
            { id: 10, title: "Counter Asinkron & Sinkron", sub: "Materi Belum Diunggah", active: false, tag: "Pertemuan 10" },
            { id: 11, title: "Finite State Machine (FSM)", sub: "Materi Belum Diunggah", active: false, tag: "Pertemuan 11" },
            { id: 12, title: "Programmable Logic Device", sub: "Materi Belum Diunggah", active: false, tag: "Pertemuan 12" },
            { id: 13, title: "Pengantar VHDL / Verilog", sub: "Materi Belum Diunggah", active: false, tag: "Pertemuan 13" },
            { id: 14, title: "Proyek Sistem Digital Lengkap", sub: "Materi Belum Diunggah", active: false, tag: "Pertemuan 14" }
        ];

        let currentBabId = 1;
        let currentStudentName = localStorage.getItem('h123_student') || "";
        let activeQuizChapter = null;
        let quizQuestionIndex = 0;
        let quizScore = 0;
        let userAnswersHistory = [];
        let currentReviewFilter = 'ALL';

        /* ==========================================================
           TEMA WARNA (DARK / LIGHT THEME TOGGLE)
           ========================================================== */
        function toggleTheme() {
            const isLight = document.documentElement.classList.contains('theme-light');
            if (isLight) {
                document.documentElement.classList.remove('theme-light');
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('h123_theme', 'dark');
                document.getElementById('themeToggleIcon').innerText = "🌙";
                document.getElementById('themeToggleText').innerText = "Mode Gelap";
                if (typeof update3DTheme === 'function') update3DTheme(false);
            } else {
                document.documentElement.classList.add('theme-light');
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('h123_theme', 'light');
                document.getElementById('themeToggleIcon').innerText = "☀️";
                document.getElementById('themeToggleText').innerText = "Mode Terang";
                if (typeof update3DTheme === 'function') update3DTheme(true);
            }
        }

        /* ==========================================================
           PENGHITUNG WAKTU BELAJAR (ONLINE STUDY TIMER)
           ========================================================== */
        let studySessionSeconds = 0;
        let totalStudySeconds = parseInt(localStorage.getItem('h123_total_study_seconds') || '0', 10);
        let studyTimerInterval = null;

        function formatSecondsToHMS(totalSec) {
            const hours = Math.floor(totalSec / 3600);
            const minutes = Math.floor((totalSec % 3600) / 60);
            const seconds = totalSec % 60;
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function startStudyTimer() {
            if (studyTimerInterval) clearInterval(studyTimerInterval);

            studyTimerInterval = setInterval(() => {
                studySessionSeconds++;
                totalStudySeconds++;

                const hmsSession = formatSecondsToHMS(studySessionSeconds);
                const hmsTotal = formatSecondsToHMS(totalStudySeconds);

                const badgeDisplay = document.getElementById('studyTimeDisplay');
                if (badgeDisplay) badgeDisplay.innerText = hmsSession;

                const modClock = document.getElementById('modStudyClock');
                if (modClock) modClock.innerText = hmsSession;

                const popoverSession = document.getElementById('popoverSessionTime');
                if (popoverSession) popoverSession.innerText = hmsSession;

                const popoverTotal = document.getElementById('popoverTotalTime');
                if (popoverTotal) popoverTotal.innerText = hmsTotal;

                if (studySessionSeconds % 5 === 0) {
                    localStorage.setItem('h123_total_study_seconds', String(totalStudySeconds));
                }
            }, 1000);
        }

        function toggleTimerDetails() {
            const popover = document.getElementById('studyTimerPopover');
            if (!popover) return;
            popover.classList.toggle('hidden');
        }

        document.addEventListener('click', (e) => {
            const badge = document.getElementById('studyTimerBadge');
            const popover = document.getElementById('studyTimerPopover');
            if (badge && popover && !badge.contains(e.target)) {
                popover.classList.add('hidden');
            }
        });

        function resetStudyTimer() {
            if (confirm("Reset penghitung waktu sesi belajar saat ini ke 00:00:00?")) {
                studySessionSeconds = 0;
                const badgeDisplay = document.getElementById('studyTimeDisplay');
                if (badgeDisplay) badgeDisplay.innerText = "00:00:00";
                const modClock = document.getElementById('modStudyClock');
                if (modClock) modClock.innerText = "00:00:00";
                const popoverSession = document.getElementById('popoverSessionTime');
                if (popoverSession) popoverSession.innerText = "00:00:00";
            }
        }

        /* ==========================================================
           PEMUTAR VIDEO MOTIVASI & PRODUKTIVITAS
           ========================================================== */
        function playMotivationVideo(slotId, videoId) {
            const slot = document.getElementById(slotId);
            if (!slot) return;
            slot.innerHTML = `
        <iframe 
          class="w-full h-full rounded-xl" 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      `;
        }

        function scrollMotivationVideos(direction) {
            const container = document.getElementById('motivationVideoCarousel');
            if (!container) return;
            const firstCard = container.querySelector('.holo-card');
            const step = firstCard ? (firstCard.offsetWidth + 24) : 380;
            container.scrollBy({
                left: direction * step,
                behavior: 'smooth'
            });
        }

        /* ==========================================================
           DRAWER SILABUS 14 MODUL
           ========================================================== */
        function openDrawer() {
            renderCurriculumGrid();
            const overlay = document.getElementById('drawerOverlay');
            const drawer = document.getElementById('curriculumDrawer');
            if (overlay && drawer) {
                overlay.classList.remove('hidden');
                drawer.classList.remove('translate-x-full');
            }
        }

        function closeDrawer() {
            const overlay = document.getElementById('drawerOverlay');
            const drawer = document.getElementById('curriculumDrawer');
            if (overlay && drawer) {
                overlay.classList.add('hidden');
                drawer.classList.add('translate-x-full');
            }
        }

        function renderCurriculumGrid() {
            const container = document.getElementById('chaptersContainer');
            if (!container) return;
            container.innerHTML = "";

            const chThemes = {
                1: { border: "border-cyan-500/40 hover:border-cyan-400", badge: "text-cyan-400 bg-cyan-950/80 border-cyan-800", shadow: "hover:shadow-[0_0_25px_rgba(0,245,255,0.25)]", icon: "🧮", titleHover: "group-hover:text-cyan-300", actionText: "text-cyan-400" },
                2: { border: "border-purple-500/40 hover:border-purple-400", badge: "text-purple-400 bg-purple-950/80 border-purple-800", shadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]", icon: "🔄", titleHover: "group-hover:text-purple-300", actionText: "text-purple-400" },
                3: { border: "border-pink-500/40 hover:border-pink-400", badge: "text-pink-400 bg-pink-950/80 border-pink-800", shadow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]", icon: "⚡", titleHover: "group-hover:text-pink-300", actionText: "text-pink-400" },
                4: { border: "border-amber-500/40 hover:border-amber-400", badge: "text-amber-400 bg-amber-950/80 border-amber-800", shadow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]", icon: "🗺️", titleHover: "group-hover:text-amber-300", actionText: "text-amber-400" },
                5: { border: "border-emerald-500/40 hover:border-emerald-400", badge: "text-emerald-400 bg-emerald-950/80 border-emerald-800", shadow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]", icon: "➕", titleHover: "group-hover:text-emerald-300", actionText: "text-emerald-400" },
            };

            CHAPTERS.forEach(ch => {
                const card = document.createElement('div');
                if (ch.active) {
                    const theme = chThemes[ch.id] || chThemes[1];
                    card.className = `p-4 rounded-2xl bg-slate-900/90 border ${theme.border} cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${theme.shadow} group shadow-md`;
                    card.onclick = () => {
                        closeDrawer();
                        openBab(ch.id);
                    };
                    card.innerHTML = `
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-1.5">
                <span class="text-sm">${theme.icon}</span>
                <span class="text-[10px] font-mono-code font-bold ${theme.badge} px-2.5 py-0.5 rounded-lg border">
                  ${ch.tag}
                </span>
              </div>
              <span class="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Tersedia
              </span>
            </div>
            <h4 class="font-bold text-white text-sm ${theme.titleHover} transition leading-snug">${ch.title}</h4>
            <p class="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">${ch.sub}</p>
            <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code ${theme.actionText} font-semibold">
              <span>Buka Materi & Laboratorium</span>
              <span class="group-hover:translate-x-1 transition-transform">➔</span>
            </div>
          `;
                } else {
                    card.className = "p-3.5 sm:p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 opacity-60 cursor-not-allowed select-none";
                    card.innerHTML = `
            <div class="flex items-center justify-between gap-2 mb-1.5">
              <span class="text-[10px] font-mono-code text-slate-500 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                ${ch.tag}
              </span>
              <span class="text-[10px] font-mono-code text-slate-500">Akan Datang</span>
            </div>
            <h4 class="font-bold text-slate-400 text-sm leading-snug">${ch.title}</h4>
            <p class="text-xs text-slate-600 mt-1 line-clamp-2">${ch.sub}</p>
          `;
                }
                container.appendChild(card);
            });
        }

        /* ==========================================================
           NAVIGASI HALAMAN (HOME VS MODULE VIEW)
           ========================================================== */
        function showSection(section) {
            const home = document.getElementById('homeView');
            const mod = document.getElementById('moduleView');
            if (section === 'home') {
                if (home) home.classList.remove('hidden');
                if (mod) mod.classList.add('hidden');
                if (typeof set3DSceneActive === 'function') set3DSceneActive(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                if (home) home.classList.add('hidden');
                if (mod) mod.classList.remove('hidden');
                if (typeof set3DSceneActive === 'function') set3DSceneActive(false);
            }
        }

        function openBab(babId) {
            const chapter = CHAPTERS.find(c => c.id === babId);
            if (!chapter || !chapter.active) return;

            document.getElementById('modBadge').innerText = `${chapter.tag} • SISTEM DIGITAL`;
            const content = document.getElementById('modContent');

            if (babId === 1) renderBab1(content);
            else if (babId === 2) renderBab2(content);
            else if (babId === 3) renderBab3(content);
            else if (babId === 4) renderBab4(content);
            else if (babId === 5) renderBab5(content);

            updateModuleNavigation(babId);
            switchBabTab(babId, 'beranda');
            showSection('module');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function switchBabTab(babId, tabKey) {
            // Hide all sub-sections for this bab
            const allSections = document.querySelectorAll('[data-bab="' + babId + '"]');
            allSections.forEach(el => el.classList.add('hidden'));

            // Reveal the selected section
            const targetSec = document.getElementById('bab' + babId + '_sec_' + tabKey);
            if (targetSec) {
                targetSec.classList.remove('hidden');
            }

            // Update active tab buttons style
            const allTabs = document.querySelectorAll('[data-bab-tab="' + babId + '"]');
            allTabs.forEach(btn => {
                const isTarget = btn.getAttribute('data-tab-target') === tabKey;
                if (isTarget) {
                    btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono-code transition bg-cyan-600 text-white shadow-md border border-cyan-400 active-bab-tab cursor-pointer";
                } else {
                    btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono-code transition bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 cursor-pointer";
                }
            });

            // Re-trigger live tool scripts if needed
            if (babId === 1) {
                if (tabKey === 'fitur1' && typeof runBab1Convert === 'function') setTimeout(runBab1Convert, 40);
                if (tabKey === 'fitur2' && typeof runBab1FracConvert === 'function') setTimeout(runBab1FracConvert, 40);
            } else if (babId === 2) {
                if (tabKey === 'fitur1' && typeof runBab2Convert === 'function') setTimeout(runBab2Convert, 40);
            } else if (babId === 3) {
                if (tabKey === 'fitur1' && typeof runBab3Simplify === 'function') setTimeout(runBab3Simplify, 40);
                if (tabKey === 'fitur2' && typeof buildInteractiveTruthTable === 'function') setTimeout(buildInteractiveTruthTable, 40);
                if (tabKey === 'fitur3' && typeof updateProteusCircuit === 'function') setTimeout(updateProteusCircuit, 40);
            } else if (babId === 4) {
                if (tabKey === 'fitur1' && typeof buildKMapGrid === 'function') setTimeout(buildKMapGrid, 40);
            } else if (babId === 5) {
                if (tabKey === 'fitur1' && typeof runBab5Calc === 'function') setTimeout(runBab5Calc, 40);
                if (tabKey === 'fitur2' && typeof switchAdderMode === 'function') setTimeout(() => { try { switchAdderMode(currentAdderMode || 'HA'); } catch (e) { } }, 40);
                if (tabKey === 'fitur3' && typeof switchSubtractorMode === 'function') setTimeout(() => { try { switchSubtractorMode(currentSubtractorMode || 'HS'); } catch (e) { } }, 40);
            }

            if (tabKey !== 'beranda') {
                const headerOffset = 80;
                const elem = document.getElementById('bab' + babId + '_sec_' + tabKey);
                if (elem) {
                    const elemPos = elem.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: elemPos, behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function navigateChapter(direction) {
            const targetId = currentBabId + direction;
            const targetCh = CHAPTERS.find(c => c.id === targetId);
            if (!targetCh) return;
            if (!targetCh.active) {
                alert(`Materi ${targetCh.tag} (${targetCh.title}) belum diunggah. Bab ini akan segera dirilis sesuai silabus.`);
                return;
            }
            openBab(targetId);
        }

        function updateModuleNavigation(babId) {
            currentBabId = babId;
            const prevCh = CHAPTERS.find(c => c.id === babId - 1);
            const nextCh = CHAPTERS.find(c => c.id === babId + 1);

            const topPrev = document.getElementById('topPrevBtn');
            const topNext = document.getElementById('topNextBtn');

            if (topPrev) topPrev.disabled = !prevCh || !prevCh.active;
            if (topNext) topNext.disabled = !nextCh || !nextCh.active;
        }

        /* ==========================================================
           MODAL KUIS MINGGUAN & ANALISIS REVIEW
           ========================================================== */
        function launchQuiz(babId) {
            activeQuizChapter = babId;
            quizQuestionIndex = 0;
            quizScore = 0;
            userAnswersHistory = [];

            const ch = CHAPTERS.find(c => c.id === babId);
            document.getElementById('quizChapterBadge').innerText = ch ? ch.tag : "Kuis";
            document.getElementById('quizTitle').innerText = ch ? `Uji Pemahaman: ${ch.title} (20 Soal)` : "Kuis Sistem Digital";

            const startView = document.getElementById('quizStartView');
            const activeView = document.getElementById('quizActiveView');
            const resultView = document.getElementById('quizResultView');

            startView.classList.remove('hidden');
            activeView.classList.add('hidden');
            resultView.classList.add('hidden');

            const nameInp = document.getElementById('quizStudentNameInput');
            if (nameInp) nameInp.value = currentStudentName || "";

            document.getElementById('quizModal').classList.remove('hidden');
        }

        function startActualQuiz() {
            const nameInp = document.getElementById('quizStudentNameInput');
            if (nameInp && nameInp.value.trim()) {
                currentStudentName = nameInp.value.trim();
                localStorage.setItem('h123_student', currentStudentName);
            }

            document.getElementById('quizStartView').classList.add('hidden');
            document.getElementById('quizActiveView').classList.remove('hidden');
            renderCurrentQuestion();
        }

        function renderCurrentQuestion() {
            const questions = QUIZ_DATA[activeQuizChapter];
            if (!questions || !questions[quizQuestionIndex]) return;
            const cur = questions[quizQuestionIndex];

            document.getElementById('quizProgressText').innerText = `Soal ${quizQuestionIndex + 1} dari ${questions.length}`;
            const pct = Math.round(((quizQuestionIndex + 1) / questions.length) * 100);
            document.getElementById('quizProgressBar').style.width = `${pct}%`;
            document.getElementById('quizScoreText').innerText = `Skor Sementara: ${quizScore}`;

            const fb = document.getElementById('quizFeedback');
            fb.classList.add('hidden');
            fb.innerHTML = "";

            const btnNext = document.getElementById('nextQuestionBtn');
            btnNext.disabled = true;
            btnNext.innerText = (quizQuestionIndex === questions.length - 1) ? "Lihat Rapor & Sertifikat ➔" : "Soal Selanjutnya ➔";

            const card = document.getElementById('quizCard');
            card.innerHTML = `
        <h4 class="text-sm sm:text-base font-bold text-white leading-relaxed mb-4">
          ${quizQuestionIndex + 1}. ${cur.q}
        </h4>
        <div class="space-y-2.5">
          ${cur.opt.map((o, idx) => `
            <button onclick="checkQuizAnswer(${idx})" class="quiz-opt-btn w-full text-left p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-xs sm:text-sm text-slate-300 transition flex items-center justify-between group">
              <span>${String.fromCharCode(65 + idx)}. ${o}</span>
              <span class="opacity-0 group-hover:opacity-100 text-cyan-400 font-bold font-mono-code">➔</span>
            </button>
          `).join('')}
        </div>
      `;
        }

        function checkQuizAnswer(chosenIdx) {
            const questions = QUIZ_DATA[activeQuizChapter];
            const cur = questions[quizQuestionIndex];
            const isCorrect = (chosenIdx === cur.ans);

            // Disable all option buttons
            const optBtns = document.querySelectorAll('.quiz-opt-btn');
            optBtns.forEach((btn, idx) => {
                btn.onclick = null;
                if (idx === cur.ans) {
                    btn.className = "w-full text-left p-3.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-400 text-xs sm:text-sm text-emerald-200 font-bold transition flex items-center justify-between";
                } else if (idx === chosenIdx && !isCorrect) {
                    btn.className = "w-full text-left p-3.5 rounded-xl bg-rose-950/80 border-2 border-rose-500 text-xs sm:text-sm text-rose-200 font-bold transition flex items-center justify-between";
                } else {
                    btn.className = "w-full text-left p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs sm:text-sm text-slate-500 opacity-60";
                }
            });

            if (isCorrect) quizScore += 5; // 20 soal x 5 = 100 max
            document.getElementById('quizScoreText').innerText = `Skor Sementara: ${quizScore}`;

            userAnswersHistory.push({
                questionIdx: quizQuestionIndex,
                question: cur.q,
                options: cur.opt,
                chosenIdx: chosenIdx,
                correctAnsIdx: cur.ans,
                isCorrect: isCorrect,
                explanation: cur.exp
            });

            const fb = document.getElementById('quizFeedback');
            fb.classList.remove('hidden');
            if (isCorrect) {
                fb.className = "text-xs p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 font-mono-code space-y-1";
                fb.innerHTML = `<div><strong>✓ Jawaban Anda Benar (+5 Poin)!</strong></div><div class="text-slate-300 font-sans">${cur.exp}</div>`;
            } else {
                fb.className = "text-xs p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/40 text-rose-200 font-mono-code space-y-1";
                fb.innerHTML = `<div><strong>✗ Jawaban Anda Kurang Tepat.</strong> Jawaban yang benar adalah Opsi ${String.fromCharCode(65 + cur.ans)}: <em>${cur.opt[cur.ans]}</em></div><div class="text-slate-300 font-sans pt-1"><strong>Pembahasan:</strong> ${cur.exp}</div>`;
            }

            document.getElementById('nextQuestionBtn').disabled = false;
        }

        function nextQuizQuestion() {
            const questions = QUIZ_DATA[activeQuizChapter];
            quizQuestionIndex++;
            if (quizQuestionIndex < questions.length) {
                renderCurrentQuestion();
            } else {
                showQuizResult();
            }
        }

        function showQuizResult() {
            document.getElementById('quizActiveView').classList.add('hidden');
            const resultView = document.getElementById('quizResultView');
            resultView.classList.remove('hidden');

            const ch = CHAPTERS.find(c => c.id === activeQuizChapter);
            const studentName = currentStudentName || "Mahasiswa";
            const totalScore = Math.min(quizScore, 100);
            const correctCount = userAnswersHistory.filter(a => a.isCorrect).length;

            document.getElementById('quizResultStudentGreeting').innerText = `Selamat, ${studentName}!`;
            document.getElementById('quizFinalScoreDisplay').innerText = `${totalScore} / 100`;
            document.getElementById('quizFinalFeedbackText').innerText = `Anda berhasil menjawab ${correctCount} dari 20 soal dengan benar. Predikat Kompetensi: ${getRankTitle(totalScore)}.`;

            filterQuizReview('ALL');
        }

        function filterQuizReview(mode) {
            currentReviewFilter = mode;
            ['ALL', 'WRONG', 'CORRECT'].forEach(m => {
                const btn = document.getElementById('filterRev_' + m);
                if (btn) {
                    if (m === mode) btn.className = "px-2 py-0.5 rounded bg-cyan-600 text-white font-bold";
                    else btn.className = "px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400 hover:text-white";
                }
            });

            const container = document.getElementById('quizReviewContainer');
            if (!container) return;

            let filtered = userAnswersHistory;
            if (mode === 'WRONG') filtered = userAnswersHistory.filter(a => !a.isCorrect);
            if (mode === 'CORRECT') filtered = userAnswersHistory.filter(a => a.isCorrect);

            if (filtered.length === 0) {
                container.innerHTML = '<div class="text-center text-slate-500 py-4">Tidak ada soal pada kategori ini.</div>';
                return;
            }

            container.innerHTML = filtered.map((item) => `
        <div class="p-3.5 rounded-xl border ${item.isCorrect ? 'border-emerald-500/30 bg-emerald-950/20' : 'border-rose-500/30 bg-rose-950/20'} space-y-1.5 text-xs">
          <div class="flex items-center justify-between font-mono-code">
            <span class="font-bold text-white">Soal ${item.questionIdx + 1}</span>
            <span class="${item.isCorrect ? 'text-emerald-400' : 'text-rose-400'} font-bold">${item.isCorrect ? '✓ Benar' : '✗ Salah'}</span>
          </div>
          <p class="text-slate-300 font-medium">${item.question}</p>
          <div class="space-y-1 font-mono-code text-[11px] pt-1">
            <div>Jawaban Anda: <span class="${item.isCorrect ? 'text-emerald-300' : 'text-rose-300'}">${String.fromCharCode(65 + item.chosenIdx)}. ${item.options[item.chosenIdx]}</span></div>
            ${!item.isCorrect ? `<div class="text-emerald-400">Kunci Benar: ${String.fromCharCode(65 + item.correctAnsIdx)}. ${item.options[item.correctAnsIdx]}</div>` : ''}
          </div>
          <div class="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
            <strong>Analisis Pembahasan:</strong> ${item.explanation}
          </div>
        </div>
      `).join('');
        }

        function restartCurrentQuiz() {
            launchQuiz(activeQuizChapter);
            startActualQuiz();
        }

        function closeQuizModal() {
            document.getElementById('quizModal').classList.add('hidden');
        }

        function getRankTitle(score) {
            if (score >= 90) return "Master of Digital Systems (Predikat Cumlaude)";
            if (score >= 80) return "Sangat Memuaskan (High Distinction)";
            if (score >= 70) return "Kompeten & Lulus (Proficient)";
            return "Perlu Pengayaan Mandiri (Developing)";
        }

        /* ==========================================================
           GENERATOR SERTIFIKAT KOMPETENSI (CANVAS & PDF)
           ========================================================== */
        function generateCertificateCanvas(studentName, courseTitle, score, rankTitle) {
            const canvas = document.createElement('canvas');
            canvas.width = 1200;
            canvas.height = 800;
            const ctx = canvas.getContext('2d');

            // 1. Background Cybernetic Deep Dark
            const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
            bgGrad.addColorStop(0, '#07090e');
            bgGrad.addColorStop(0.5, '#0b1329');
            bgGrad.addColorStop(1, '#05070c');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, 1200, 800);

            // 2. Borders & Corner Accents
            ctx.strokeStyle = '#00f5ff';
            ctx.lineWidth = 4;
            ctx.strokeRect(30, 30, 1140, 740);

            ctx.strokeStyle = '#a855f7';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(40, 40, 1120, 720);

            // 3. Header Logo & Title
            ctx.textAlign = 'center';
            ctx.fillStyle = '#00f5ff';
            ctx.font = 'bold 22px "JetBrains Mono", monospace';
            ctx.fillText('HITUNG123.ID • LABORATORIUM VIRTUAL SISTEM DIGITAL', 600, 90);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
            ctx.fillText('SERTIFIKAT KOMPETENSI RESMI', 600, 150);

            ctx.fillStyle = '#94a3b8';
            ctx.font = '16px "Plus Jakarta Sans", sans-serif';
            ctx.fillText('Diberikan secara sah atas penyelesaian evaluasi komprehensif logika digital kepada:', 600, 200);

            // 4. Student Name
            ctx.fillStyle = '#00f5ff';
            ctx.font = 'bold 48px "Plus Jakarta Sans", sans-serif';
            ctx.fillText(studentName || 'Mahasiswa Praktikan', 600, 275);

            ctx.strokeStyle = '#a855f7';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(350, 300);
            ctx.lineTo(850, 300);
            ctx.stroke();

            // 5. Course & Meeting Title
            ctx.fillStyle = '#e2e8f0';
            ctx.font = '20px "Plus Jakarta Sans", sans-serif';
            ctx.fillText('Atas kelulusan penuntasan materi evaluasi mingguan pada modul perkuliahan:', 600, 350);

            ctx.fillStyle = '#ec4899';
            ctx.font = 'bold 26px "JetBrains Mono", monospace';
            ctx.fillText(courseTitle || 'Sistem Digital', 600, 395);

            // 6. Score & Predicate Badge Box
            ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
            ctx.fillRect(400, 440, 400, 100);
            ctx.strokeStyle = '#00f5ff';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(400, 440, 400, 100);

            ctx.fillStyle = '#00ff88';
            ctx.font = 'bold 36px "JetBrains Mono", monospace';
            ctx.fillText(`SKOR: ${score} / 100`, 600, 485);

            ctx.fillStyle = '#e2e8f0';
            ctx.font = '15px "Plus Jakarta Sans", sans-serif';
            ctx.fillText(rankTitle || 'Kompeten', 600, 520);

            // 7. Footer Official Signatures & Verification Stamp
            const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
            ctx.textAlign = 'left';
            ctx.fillStyle = '#94a3b8';
            ctx.font = '14px "JetBrains Mono", monospace';
            ctx.fillText(`Diterbitkan pada: ${today}`, 70, 680);
            ctx.fillText('ID Verifikasi: H123-DIGITAL-' + Math.floor(10000000 + Math.random() * 90000000), 70, 705);

            ctx.textAlign = 'right';
            ctx.fillStyle = '#00f5ff';
            ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
            ctx.fillText('Dewan Instruktur Sistem Digital', 1130, 680);
            ctx.fillStyle = '#94a3b8';
            ctx.font = '13px "JetBrains Mono", monospace';
            ctx.fillText('Platform hitung123.id Official Certified', 1130, 705);

            return canvas;
        }

        function downloadCertificatePNG() {
            const ch = CHAPTERS.find(c => c.id === activeQuizChapter) || { tag: "Pertemuan", title: "Sistem Digital" };
            const safeName = (currentStudentName || "Mahasiswa").replace(/[^a-zA-Z0-9]/g, "_");
            const canvas = generateCertificateCanvas(currentStudentName || "Mahasiswa", `${ch.tag}: ${ch.title}`, quizScore, getRankTitle(quizScore));

            const link = document.createElement('a');
            link.download = `Sertifikat-hitung123-${safeName}-Bab${activeQuizChapter}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }

        function downloadCertificatePDF() {
            const ch = CHAPTERS.find(c => c.id === activeQuizChapter) || { tag: "Pertemuan", title: "Sistem Digital" };
            const safeName = (currentStudentName || "Mahasiswa").replace(/[^a-zA-Z0-9]/g, "_");
            const canvas = generateCertificateCanvas(currentStudentName || "Mahasiswa", `${ch.tag}: ${ch.title}`, quizScore, getRankTitle(quizScore));

            if (window.jspdf && window.jspdf.jsPDF) {
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF({
                    orientation: 'landscape',
                    unit: 'px',
                    format: [1200, 800]
                });
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'PNG', 0, 0, 1200, 800);
                pdf.save(`Sertifikat-hitung123-${safeName}-Bab${activeQuizChapter}.pdf`);
            } else {
                downloadCertificatePNG();
            }
        }

        /* ==========================================================
           CORE ALGORITMA QUINE-MCCLUSKEY LOGIC MINIMIZER (2-5 VARS)
           ========================================================== */
        function solveQuineMcCluskeyCore(ones, dcares, varCount, varNames) {
            const allMinterms = Array.from(new Set([...ones, ...dcares])).sort((a, b) => a - b);
            if (allMinterms.length === 0) return { chosen: [], primeImplicants: [], essentialPIs: [] };

            // Kelompokkan suku berdasarkan banyaknya bit 1
            let groups = {};
            allMinterms.forEach(m => {
                const bin = m.toString(2).padStart(varCount, '0');
                const countOnes = (bin.match(/1/g) || []).length;
                if (!groups[countOnes]) groups[countOnes] = [];
                groups[countOnes].push({
                    mask: bin,
                    minterms: [m],
                    combined: false
                });
            });

            let primeImplicants = [];

            // Proses perbandingan kolom Quine-McCluskey
            let currentCol = groups;
            while (Object.keys(currentCol).length > 0) {
                let nextCol = {};
                let keys = Object.keys(currentCol).map(Number).sort((a, b) => a - b);
                let combinedAny = false;

                for (let i = 0; i < keys.length; i++) {
                    const k1 = keys[i];
                    const k2 = k1 + 1;
                    const g1 = currentCol[k1] || [];
                    const g2 = currentCol[k2] || [];

                    g1.forEach(t1 => {
                        g2.forEach(t2 => {
                            // Cek apakah hanya berbeda 1 bit di posisi yang sama
                            let diffCount = 0;
                            let diffIdx = -1;
                            for (let p = 0; p < varCount; p++) {
                                if (t1.mask[p] !== t2.mask[p]) {
                                    diffCount++;
                                    diffIdx = p;
                                }
                            }

                            if (diffCount === 1) {
                                t1.combined = true;
                                t2.combined = true;
                                combinedAny = true;

                                const newMask = t1.mask.substring(0, diffIdx) + '-' + t1.mask.substring(diffIdx + 1);
                                const newMinterms = Array.from(new Set([...t1.minterms, ...t2.minterms])).sort((a, b) => a - b);

                                const cOnes = (newMask.replace(/-/g, '').match(/1/g) || []).length;
                                if (!nextCol[cOnes]) nextCol[cOnes] = [];

                                if (!nextCol[cOnes].some(x => x.mask === newMask)) {
                                    nextCol[cOnes].push({
                                        mask: newMask,
                                        minterms: newMinterms,
                                        combined: false
                                    });
                                }
                            }
                        });
                    });
                }

                // Kumpulkan yang tidak dapat dikombinasikan sebagai Prime Implicant
                keys.forEach(k => {
                    (currentCol[k] || []).forEach(term => {
                        if (!term.combined && !primeImplicants.some(p => p.mask === term.mask)) {
                            primeImplicants.push(term);
                        }
                    });
                });

                if (!combinedAny) break;
                currentCol = nextCol;
            }

            // Filter minterm target (hanya minterm 'ones', bukan don't care)
            let uncov = [...ones];
            let essentialPIs = [];
            let chosen = [];

            // Cari Essential Prime Implicants
            ones.forEach(m => {
                const covering = primeImplicants.filter(pi => pi.minterms.includes(m));
                if (covering.length === 1) {
                    const epi = covering[0];
                    if (!essentialPIs.some(e => e.mask === epi.mask)) {
                        essentialPIs.push(epi);
                        chosen.push(epi);
                        uncov = uncov.filter(x => !epi.minterms.includes(x));
                    }
                }
            });

            // Greedy cover untuk sisa minterm
            while (uncov.length > 0) {
                let candidates = primeImplicants.filter(pi => !chosen.some(c => c.mask === pi.mask));
                if (candidates.length === 0) break;
                candidates.sort((a, b) => {
                    const aCount = a.minterms.filter(m => uncov.includes(m)).length;
                    const bCount = b.minterms.filter(m => uncov.includes(m)).length;
                    return bCount - aCount;
                });
                const best = candidates.shift();
                if (!best) break;
                chosen.push(best);
                uncov = uncov.filter(m => !best.minterms.includes(m));
            }

            return { chosen, primeImplicants, essentialPIs };
        }

        /* ==========================================================
           3D INTERACTIVE DIGITAL SYSTEMS UNIVERSE (THREE.JS)
           ========================================================== */
        let scene3D = null;
        let camera3D = null;
        let renderer3D = null;
        let gridMesh3D = null;
        let nodes3D = [];
        let particles3D = null;
        let is3DActive = true;
        let mouseX3D = 0, mouseY3D = 0;
        let targetX3D = 0, targetY3D = 0;

        function init3DBackground() {
            if (typeof THREE === 'undefined') {
                console.warn('Three.js not loaded, using CSS ambient glowing fallback.');
                return;
            }

            const canvas = document.getElementById('bg3dCanvas');
            if (!canvas) return;

            const isLight = document.documentElement.classList.contains('theme-light');

            // 1. Scene & Depth Fog
            scene3D = new THREE.Scene();
            scene3D.fog = new THREE.FogExp2(isLight ? 0xedf2f7 : 0x060913, 0.0016);

            // 2. Camera
            camera3D = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 3000);
            camera3D.position.set(0, 60, 480);

            // 3. Renderer
            renderer3D = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true,
                powerPreference: 'high-performance'
            });
            renderer3D.setSize(window.innerWidth, window.innerHeight);
            renderer3D.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // 4. Undulating Cyber Horizon Logic Grid (Logic Circuit Plane)
            const gridGeo = new THREE.PlaneGeometry(2400, 2400, 40, 40);
            gridGeo.rotateX(-Math.PI / 2.35);
            const gridMat = new THREE.MeshBasicMaterial({
                color: isLight ? 0x0284c7 : 0x00f5ff,
                wireframe: true,
                transparent: true,
                opacity: isLight ? 0.22 : 0.2
            });
            gridMesh3D = new THREE.Mesh(gridGeo, gridMat);
            gridMesh3D.position.y = -220;
            scene3D.add(gridMesh3D);

            // 5. Floating Geometric Digital Circuit Nodes (14 Nodes representing 14 Modules!)
            const nodeConfigs = [
                { type: 'icosa', color: isLight ? 0x0284c7 : 0x00f5ff, size: 28, pos: [-360, 160, -80] },
                { type: 'octa', color: isLight ? 0x7c3aed : 0xa855f7, size: 24, pos: [380, 180, -120] },
                { type: 'box', color: isLight ? 0xdb2777 : 0xec4899, size: 26, pos: [-420, -40, 40] },
                { type: 'dodeca', color: isLight ? 0xd97706 : 0xf59e0b, size: 25, pos: [400, -50, 60] },
                { type: 'tetra', color: isLight ? 0x059669 : 0x10b981, size: 30, pos: [-200, 240, -160] },
                { type: 'icosa', color: isLight ? 0x0284c7 : 0x38bdf8, size: 22, pos: [220, 250, -150] },
                { type: 'box', color: isLight ? 0x7c3aed : 0xc084fc, size: 20, pos: [-150, -120, 80] },
                { type: 'octa', color: isLight ? 0x059669 : 0x34d399, size: 22, pos: [160, -130, 90] },
                { type: 'dodeca', color: isLight ? 0xdb2777 : 0xf472b6, size: 24, pos: [-480, 80, -220] },
                { type: 'tetra', color: isLight ? 0xd97706 : 0xfbbf24, size: 26, pos: [470, 70, -200] },
                { type: 'icosa', color: isLight ? 0x0284c7 : 0x00f5ff, size: 18, pos: [-80, 290, -280] },
                { type: 'box', color: isLight ? 0x7c3aed : 0xa855f7, size: 18, pos: [80, 290, -280] },
                { type: 'octa', color: isLight ? 0x059669 : 0x10b981, size: 20, pos: [-310, -180, -50] },
                { type: 'dodeca', color: isLight ? 0xdb2777 : 0xec4899, size: 22, pos: [300, -170, -60] }
            ];

            nodes3D = [];
            nodeConfigs.forEach((cfg, idx) => {
                let geo;
                if (cfg.type === 'icosa') geo = new THREE.IcosahedronGeometry(cfg.size, 0);
                else if (cfg.type === 'octa') geo = new THREE.OctahedronGeometry(cfg.size, 0);
                else if (cfg.type === 'dodeca') geo = new THREE.DodecahedronGeometry(cfg.size, 0);
                else if (cfg.type === 'tetra') geo = new THREE.TetrahedronGeometry(cfg.size, 0);
                else geo = new THREE.BoxGeometry(cfg.size, cfg.size, cfg.size);

                // Dual Layer: Outer Wireframe + Semi-transparent Inner Core
                const wireMat = new THREE.MeshBasicMaterial({
                    color: cfg.color,
                    wireframe: true,
                    transparent: true,
                    opacity: isLight ? 0.72 : 0.8
                });
                const coreMat = new THREE.MeshBasicMaterial({
                    color: cfg.color,
                    transparent: true,
                    opacity: isLight ? 0.16 : 0.22
                });

                const wireMesh = new THREE.Mesh(geo, wireMat);
                const coreMesh = new THREE.Mesh(geo, coreMat);
                coreMesh.scale.set(0.85, 0.85, 0.85);

                const group = new THREE.Group();
                group.add(wireMesh);
                group.add(coreMesh);
                group.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);

                group.userData = {
                    origY: cfg.pos[1],
                    floatSpeed: 0.8 + Math.random() * 0.8,
                    floatAmp: 12 + Math.random() * 14,
                    rotX: (Math.random() - 0.5) * 0.015,
                    rotY: (Math.random() - 0.5) * 0.018,
                    rotZ: (Math.random() - 0.5) * 0.012,
                    wireMat: wireMat,
                    coreMat: coreMat,
                    index: idx
                };

                scene3D.add(group);
                nodes3D.push(group);
            });

            // 6. Quantum Logic Swarm (Glowing Data Particles)
            const pCount = 750;
            const pGeo = new THREE.BufferGeometry();
            const pPos = new Float32Array(pCount * 3);
            const pColors = new Float32Array(pCount * 3);

            const colorPaletteDark = [
                new THREE.Color(0x00f5ff), // Cyan
                new THREE.Color(0xa855f7), // Purple
                new THREE.Color(0x10b981), // Emerald
                new THREE.Color(0xec4899)  // Pink
            ];

            const colorPaletteLight = [
                new THREE.Color(0x0284c7), // Cobalt Blue
                new THREE.Color(0x7c3aed), // Violet
                new THREE.Color(0x059669), // Emerald
                new THREE.Color(0xdb2777)  // Ruby
            ];

            const activePalette = isLight ? colorPaletteLight : colorPaletteDark;

            for (let i = 0; i < pCount; i++) {
                pPos[i * 3] = (Math.random() - 0.5) * 1500;
                pPos[i * 3 + 1] = (Math.random() - 0.5) * 900 + 40;
                pPos[i * 3 + 2] = (Math.random() - 0.5) * 1100 - 100;

                const c = activePalette[i % activePalette.length];
                pColors[i * 3] = c.r;
                pColors[i * 3 + 1] = c.g;
                pColors[i * 3 + 2] = c.b;
            }

            pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
            pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

            const pMat = new THREE.PointsMaterial({
                size: isLight ? 4.2 : 3.6,
                vertexColors: true,
                transparent: true,
                opacity: isLight ? 0.75 : 0.85,
                blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
            });

            particles3D = new THREE.Points(pGeo, pMat);
            scene3D.add(particles3D);

            // 7. Event Listeners for Parallax and Window Resize
            window.addEventListener('mousemove', on3DMouseMove, { passive: true });
            window.addEventListener('resize', on3DResize, { passive: true });

            // Start 60fps Animation Loop
            requestAnimationFrame(animate3DScene);
        }

        function on3DMouseMove(e) {
            mouseX3D = (e.clientX - window.innerWidth / 2) * 0.35;
            mouseY3D = (e.clientY - window.innerHeight / 2) * 0.35;
        }

        function on3DResize() {
            if (!camera3D || !renderer3D) return;
            camera3D.aspect = window.innerWidth / window.innerHeight;
            camera3D.updateProjectionMatrix();
            renderer3D.setSize(window.innerWidth, window.innerHeight);
        }

        let clock3D = 0;
        function animate3DScene() {
            requestAnimationFrame(animate3DScene);

            if (!is3DActive || !scene3D || !camera3D || !renderer3D) return;

            clock3D += 0.015;

            // Smooth Parallax Lerp
            targetX3D += (mouseX3D - targetX3D) * 0.04;
            targetY3D += (mouseY3D - targetY3D) * 0.04;
            camera3D.position.x = targetX3D;
            camera3D.position.y = 60 - targetY3D * 0.45;
            camera3D.lookAt(0, 20, 0);

            // Rotate and Hover Floating Nodes
            nodes3D.forEach((n, i) => {
                n.rotation.x += n.userData.rotX;
                n.rotation.y += n.userData.rotY;
                n.rotation.z += n.userData.rotZ;
                n.position.y = n.userData.origY + Math.sin(clock3D * n.userData.floatSpeed + i) * n.userData.floatAmp;
            });

            // Slowly Drift Logic Particles
            if (particles3D) {
                particles3D.rotation.y = clock3D * 0.03;
                particles3D.rotation.x = Math.sin(clock3D * 0.02) * 0.04;
            }

            // Gently Undulate Horizon Grid
            if (gridMesh3D) {
                gridMesh3D.position.z = Math.sin(clock3D * 0.2) * 15;
            }

            renderer3D.render(scene3D, camera3D);
        }

        function update3DTheme(isLight) {
            if (!scene3D) return;

            // Update Fog
            if (scene3D.fog) {
                scene3D.fog.color.setHex(isLight ? 0xedf2f7 : 0x060913);
            }

            // Update Grid Color & Opacity
            if (gridMesh3D && gridMesh3D.material) {
                gridMesh3D.material.color.setHex(isLight ? 0x0284c7 : 0x00f5ff);
                gridMesh3D.material.opacity = isLight ? 0.22 : 0.2;
            }

            // Update Floating Node Materials
            const lightThemeColors = [
                0x0284c7, 0x7c3aed, 0xdb2777, 0xd97706, 0x059669,
                0x0284c7, 0x7c3aed, 0x059669, 0xdb2777, 0xd97706,
                0x0284c7, 0x7c3aed, 0x059669, 0xdb2777
            ];
            const darkThemeColors = [
                0x00f5ff, 0xa855f7, 0xec4899, 0xf59e0b, 0x10b981,
                0x38bdf8, 0xc084fc, 0x34d399, 0xf472b6, 0xfbbf24,
                0x00f5ff, 0xa855f7, 0x10b981, 0xec4899
            ];

            const colors = isLight ? lightThemeColors : darkThemeColors;
            nodes3D.forEach((n, idx) => {
                const hex = colors[idx % colors.length];
                if (n.userData.wireMat) {
                    n.userData.wireMat.color.setHex(hex);
                    n.userData.wireMat.opacity = isLight ? 0.72 : 0.8;
                }
                if (n.userData.coreMat) {
                    n.userData.coreMat.color.setHex(hex);
                    n.userData.coreMat.opacity = isLight ? 0.16 : 0.22;
                }
            });

            // Update Particle Palette & Blending
            if (particles3D && particles3D.geometry) {
                const pColors = particles3D.geometry.attributes.color.array;
                const count = pColors.length / 3;
                const colorPaletteDark = [
                    new THREE.Color(0x00f5ff),
                    new THREE.Color(0xa855f7),
                    new THREE.Color(0x10b981),
                    new THREE.Color(0xec4899)
                ];
                const colorPaletteLight = [
                    new THREE.Color(0x0284c7),
                    new THREE.Color(0x7c3aed),
                    new THREE.Color(0x059669),
                    new THREE.Color(0xdb2777)
                ];
                const activePalette = isLight ? colorPaletteLight : colorPaletteDark;

                for (let i = 0; i < count; i++) {
                    const c = activePalette[i % activePalette.length];
                    pColors[i * 3] = c.r;
                    pColors[i * 3 + 1] = c.g;
                    pColors[i * 3 + 2] = c.b;
                }
                particles3D.geometry.attributes.color.needsUpdate = true;
                if (particles3D.material) {
                    particles3D.material.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
                    particles3D.material.opacity = isLight ? 0.75 : 0.85;
                    particles3D.material.needsUpdate = true;
                }
            }
        }

        function set3DSceneActive(active) {
            is3DActive = active;
            const canvas = document.getElementById('bg3dCanvas');
            if (canvas) {
                canvas.style.opacity = active ? (document.documentElement.classList.contains('theme-light') ? '0.82' : '0.95') : '0.2';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const isLight = document.documentElement.classList.contains('theme-light');
            const icon = document.getElementById('themeToggleIcon');
            const txt = document.getElementById('themeToggleText');
            if (isLight) {
                if (icon) icon.innerText = "☀️";
                if (txt) txt.innerText = "Mode Terang";
            } else {
                if (icon) icon.innerText = "🌙";
                if (txt) txt.innerText = "Mode Gelap";
            }

            startStudyTimer();
            renderCurriculumGrid();
            showSection('home');
            init3DBackground();
        });


        /* ==========================================================
           PERTEMUAN 1: PENGANTAR SISTEM DIGITAL & SISTEM BILANGAN
           ========================================================== */
        function renderBab1(container) {
            container.innerHTML = `
        <!-- Sub-navigasi Tab Fitur Pertemuan 1 -->
        <div class="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button data-bab-tab="1" data-tab-target="beranda" onclick="switchBabTab(1, 'beranda')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono-code transition bg-cyan-600 text-white shadow-md border border-cyan-400 active-bab-tab cursor-pointer">
              <span>🏠 Beranda Materi</span>
            </button>
            <button data-bab-tab="1" data-tab-target="fitur1" onclick="switchBabTab(1, 'fitur1')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono-code transition bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 cursor-pointer">
              <span>⇄ Fitur 1: Bilangan Bulat</span>
            </button>
            <button data-bab-tab="1" data-tab-target="fitur2" onclick="switchBabTab(1, 'fitur2')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono-code transition bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 cursor-pointer">
              <span>⊞ Fitur 2: Bilangan Pecahan</span>
            </button>
          </div>
          <button onclick="launchQuiz(1)" class="holo-btn px-4 py-1.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow cursor-pointer">
            <span>📝 Kuis (20 Soal)</span>
          </button>
        </div>

        <!-- ==================== TAB 1: BERANDA MATERI PERTEMUAN 1 ==================== -->
        <div id="bab1_sec_beranda" data-bab="1" class="space-y-6">
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div class="inline-block text-xs font-mono-code text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800">
                Materi Pokok Pertemuan 01
              </div>
              <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-2 transition hover:scale-105 shadow-md group" title="Buka Materi Lengkap Bab 1 di Google Drive">
                <svg class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                <span>Materi Lengkap Bab 1 (Google Drive)</span>
                <span class="text-emerald-400 font-bold">↗</span>
              </a>
            </div>

            <div>
              <h2 class="text-2xl sm:text-3xl font-black text-white">Pengantar Sistem Digital & Sistem Bilangan</h2>
              <p class="text-sm text-slate-300 leading-relaxed mt-2">
                Sistem digital adalah teknologi elektronika yang memproses informasi menggunakan representasi diskrit (tegangan HIGH/1 dan LOW/0). Berbeda dari sistem analog kontinu yang rentan terhadap distorsi dan interferensi derau (*noise*), sistem digital memberikan akurasi absolut, kemudahan pemrosesan komputasi matematis, serta penyimpanan data tanpa degradasi sinyal.
              </p>
            </div>

            <!-- 5 Aplikasi Sistem Digital dalam Kehidupan Nyata -->
            <div class="space-y-3 pt-2">
              <h4 class="text-sm font-bold text-cyan-300 flex items-center gap-2">
                <span>🌐</span> Aplikasi Penerapan Sistem Digital dalam Kehidupan Nyata
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
                <div class="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <b class="text-cyan-400 block font-mono-code">1. Komputer & Smartphone</b>
                  <p class="text-slate-400 leading-relaxed">Mikroprosesor berbasis jutaan gerbang logika transistor mengolah instruksi biner dengan clock berkecepatan GHz.</p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <b class="text-purple-400 block font-mono-code">2. Audio & Video Digital (DSP)</b>
                  <p class="text-slate-400 leading-relaxed">Konversi sinyal analog ke digital (ADC/DAC) pada pemutar musik, kamera digital, streaming video, dan kompresi file.</p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <b class="text-pink-400 block font-mono-code">3. Otomotif Cerdas & ECU</b>
                  <p class="text-slate-400 leading-relaxed">Electronic Control Unit mengatur injeksi bahan bakar, sistem pengereman ABS, sensor airbag, dan kontrol kemudi mandiri.</p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <b class="text-emerald-400 block font-mono-code">4. Telekomunikasi 5G & Internet</b>
                  <p class="text-slate-400 leading-relaxed">Transmisi paket data digital melalui serat optik dan gelombang mikro dengan algoritma modulasi serta koreksi galat.</p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1 sm:col-span-2 lg:col-span-2">
                  <b class="text-amber-400 block font-mono-code">5. Peralatan Medis & Robotika Industri</b>
                  <p class="text-slate-400 leading-relaxed">Peralatan presisi seperti MRI, CT-Scan, elektrokardiogram digital, dan PLC pada lengan robot manufaktur pabrik.</p>
                </div>
              </div>
            </div>

            <!-- 4 Sistem Bilangan Utama -->
            <div class="space-y-3 pt-2">
              <h4 class="text-sm font-bold text-purple-300 flex items-center gap-2">
                <span>🔢</span> 4 Sistem Bilangan Digital Dasar
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono-code">
                <div class="bg-slate-950/80 p-3.5 rounded-xl border border-cyan-500/30">
                  <span class="text-cyan-400 font-bold block text-sm mb-1">Desimal (Radiks 10)</span>
                  <p class="text-slate-300 text-[11px]">Digit: <strong>0 s.d. 9</strong></p>
                  <p class="text-slate-400 text-[11px] mt-1">Bobot posisi: 10⁰, 10¹, 10²... Sistem bilangan alamiah manusia sehari-hari.</p>
                </div>
                <div class="bg-slate-950/80 p-3.5 rounded-xl border border-purple-500/30">
                  <span class="text-purple-400 font-bold block text-sm mb-1">Biner (Radiks 2)</span>
                  <p class="text-slate-300 text-[11px]">Digit: <strong>0 dan 1</strong></p>
                  <p class="text-slate-400 text-[11px] mt-1">Bobot posisi: 2⁰, 2¹, 2²... Fondasi utama seluruh perangkat keras logika.</p>
                </div>
                <div class="bg-slate-950/80 p-3.5 rounded-xl border border-pink-500/30">
                  <span class="text-pink-400 font-bold block text-sm mb-1">Oktal (Radiks 8)</span>
                  <p class="text-slate-300 text-[11px]">Digit: <strong>0 s.d. 7</strong></p>
                  <p class="text-slate-400 text-[11px] mt-1">Bobot posisi: 8⁰, 8¹, 8²... Digunakan mengelompokkan tiap 3-bit biner (2³ = 8).</p>
                </div>
                <div class="bg-slate-950/80 p-3.5 rounded-xl border border-emerald-500/30">
                  <span class="text-emerald-400 font-bold block text-sm mb-1">Heksadesimal (Radiks 16)</span>
                  <p class="text-slate-300 text-[11px]">Digit: <strong>0-9 & A-F</strong></p>
                  <p class="text-slate-400 text-[11px] mt-1">Bobot posisi: 16⁰, 16¹... Menyingkat tiap 4-bit biner (2⁴ = 16) untuk alamat memori.</p>
                </div>
              </div>
            </div>

            <!-- PUSAT TOMBOL FITUR PRAKTIKUM PERTEMUAN 01 -->
            <div class="space-y-4 pt-4 border-t border-slate-800">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-base font-bold text-white flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Pusat Fitur & Alat Interaktif Pertemuan 01
                  </h4>
                  <p class="text-xs text-slate-400">Pilih alat praktikum di bawah ini sesuai kebutuhan Anda:</p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                
                <!-- Kartu Tombol Fitur 1: Bilangan Bulat -->
                <div onclick="switchBabTab(1, 'fitur1')" class="holo-card p-5 rounded-2xl border-cyan-500/30 hover:border-cyan-400 hover:scale-[1.02] transition cursor-pointer group flex flex-col justify-between space-y-3">
                  <div class="space-y-2.5">
                    <div class="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center text-xl font-bold">
                      ⇄
                    </div>
                    <span class="text-[10px] font-mono-code font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">Fitur 1</span>
                    <h5 class="text-sm font-bold text-white group-hover:text-cyan-300 transition">Kalkulator Konversi Bilangan Bulat</h5>
                    <p class="text-xs text-slate-400 leading-relaxed">Konversi bebas antar Desimal, Biner, Oktal, dan Heksadesimal dengan langkah pembagian bertingkat.</p>
                  </div>
                  <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-semibold font-mono-code">
                    <span>Buka Fitur 1</span>
                    <span class="group-hover:translate-x-1 transition">➔</span>
                  </div>
                </div>

                <!-- Kartu Tombol Fitur 2: Bilangan Pecahan -->
                <div onclick="switchBabTab(1, 'fitur2')" class="holo-card p-5 rounded-2xl border-purple-500/30 hover:border-purple-400 hover:scale-[1.02] transition cursor-pointer group flex flex-col justify-between space-y-3">
                  <div class="space-y-2.5">
                    <div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-400 flex items-center justify-center text-xl font-bold">
                      ⊞
                    </div>
                    <span class="text-[10px] font-mono-code font-bold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800">Fitur 2</span>
                    <h5 class="text-sm font-bold text-white group-hover:text-purple-300 transition">Kalkulator Konversi Bilangan Pecahan</h5>
                    <p class="text-xs text-slate-400 leading-relaxed">Konversi pecahan koma desimal, biner, oktal, dan heksadesimal dengan metode perkalian bertingkat.</p>
                  </div>
                  <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-purple-400 font-semibold font-mono-code">
                    <span>Buka Fitur 2</span>
                    <span class="group-hover:translate-x-1 transition">➔</span>
                  </div>
                </div>

                <!-- Kartu Tombol Kuis Evaluasi -->
                <div onclick="launchQuiz(1)" class="holo-card p-5 rounded-2xl border-amber-500/30 hover:border-amber-400 hover:scale-[1.02] transition cursor-pointer group flex flex-col justify-between space-y-3">
                  <div class="space-y-2.5">
                    <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center text-xl font-bold">
                      🏆
                    </div>
                    <span class="text-[10px] font-mono-code font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">Evaluasi Mandiri</span>
                    <h5 class="text-sm font-bold text-white group-hover:text-amber-300 transition">Kuis Evaluasi Bab 1 (20 Soal)</h5>
                    <p class="text-xs text-slate-400 leading-relaxed">Uji pemahaman komprehensif 20 butir soal acak, telaah pembahasan ilmiah, dan unduh e-sertifikat resmi.</p>
                  </div>
                  <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-amber-400 font-semibold font-mono-code">
                    <span>Mulai Kuis 20 Soal</span>
                    <span class="group-hover:translate-x-1 transition">➔</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <!-- Banner Materi Lengkap Google Drive -->
          <div class="holo-card p-5 sm:p-6 rounded-2xl border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                📁
              </div>
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-emerald-400 mb-0.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Dokumen & Modul Kuliah Pertemuan 01
                </div>
                <h4 class="font-bold text-white text-base">Unduh Materi Lengkap Bab 1 di Google Drive</h4>
                <p class="text-xs text-slate-300">Akses slide kuliah resmi, e-book sistem digital, dan rangkuman konversi bilangan bulat & pecahan.</p>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-emerald-200 hover:text-white flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:scale-105 transition">
              <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
              <span>Buka Materi di Google Drive ↗</span>
            </a>
          </div>
        </div>

        <!-- ==================== TAB 2: FITUR 1 (BILANGAN BULAT) ==================== -->
        <div id="bab1_sec_fitur1" data-bab="1" class="hidden space-y-4">
          <button onclick="switchBabTab(1, 'beranda')" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-xs font-mono-code text-cyan-400 transition hover:scale-105 cursor-pointer">
            <span>←</span>
            <span>Kembali ke Beranda Materi Bab 1</span>
          </button>

          <!-- FITUR 1: KALKULATOR KONVERSI BILANGAN BULAT MULTI-ARAH -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-cyan-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800 mb-1">
                  <span>Fitur 1</span> • Bilangan Bulat
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-cyan-400 text-xl">⇄</span> Kalkulator Konversi Bilangan Bulat (Bebas Input & Bebas Target)
                </h3>
                <p class="text-xs text-slate-400">Pilih bebas basis asal dan basis tujuan untuk mengonversi bilangan bulat seketika.</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <!-- Dari Basis Apa -->
              <div class="sm:col-span-3 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Konversi Dari (Input):</label>
                <select id="b1_from" onchange="runBab1Convert()" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-cyan-400 font-mono-code">
                  <option value="10">Desimal (Basis 10)</option>
                  <option value="2">Biner (Basis 2)</option>
                  <option value="8">Oktal (Basis 8)</option>
                  <option value="16">Heksadesimal (Basis 16)</option>
                </select>
              </div>

              <!-- Input Nilai -->
              <div class="sm:col-span-5 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Masukkan Nilai Bilangan Bulat:</label>
                <input type="text" id="b1_val" value="175" oninput="runBab1Convert()" placeholder="Contoh: 175" class="w-full bg-slate-950 border border-cyan-500/40 rounded-xl p-2.5 text-sm text-cyan-300 font-mono-code focus:outline-none focus:border-cyan-400 font-bold" />
              </div>

              <!-- Konversi Ke Basis Apa -->
              <div class="sm:col-span-4 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Konversi Ke (Target):</label>
                <select id="b1_to" onchange="runBab1Convert()" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-purple-400 font-mono-code">
                  <option value="ALL">Tampilkan Semua Basis Sekaligus (Des/Bin/Okt/Hex)</option>
                  <option value="2">Biner (Basis 2)</option>
                  <option value="8">Oktal (Basis 8)</option>
                  <option value="10">Desimal (Basis 10)</option>
                  <option value="16">Heksadesimal (Basis 16)</option>
                </select>
              </div>
            </div>

            <!-- Hasil Konversi Bilangan Bulat -->
            <div id="b1_output" class="bg-slate-950/80 p-4 rounded-xl border border-cyan-500/20 font-mono-code text-sm">
            </div>

            <!-- Langkah Matematis -->
            <div id="b1_steps" class="text-xs text-slate-300 space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-slate-800 font-mono-code">
            </div>
          </div>
        </div>

        <!-- ==================== TAB 3: FITUR 2 (BILANGAN PECAHAN) ==================== -->
        <div id="bab1_sec_fitur2" data-bab="1" class="hidden space-y-4">
          <button onclick="switchBabTab(1, 'beranda')" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-400 text-xs font-mono-code text-purple-400 transition hover:scale-105 cursor-pointer">
            <span>←</span>
            <span>Kembali ke Beranda Materi Bab 1</span>
          </button>

          <!-- FITUR 2: KALKULATOR KONVERSI BILANGAN PECAHAN MULTI-ARAH -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-purple-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800 mb-1">
                  <span>Fitur 2</span> • Bilangan Pecahan
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-purple-400 text-xl">⊞</span> Kalkulator Konversi Bilangan Pecahan (Fractional Multi-Way Converter)
                </h3>
                <p class="text-xs text-slate-400">Pilih basis pecahan asal dan basis tujuan dengan cara kerja perkalian bertahap dan pembobotan pangkat negatif.</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <!-- Dari Basis Apa -->
              <div class="sm:col-span-3 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Tipe Pecahan Asal:</label>
                <select id="b1f_from" onchange="runBab1FracConvert()" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-purple-400 font-mono-code">
                  <option value="10">Desimal Pecahan (Contoh: 25.625)</option>
                  <option value="2">Biner Pecahan (Contoh: 11001.101)</option>
                  <option value="8">Oktal Pecahan (Contoh: 31.5)</option>
                  <option value="16">Heksadesimal Pecahan (Contoh: 19.A)</option>
                </select>
              </div>

              <!-- Input Nilai Pecahan -->
              <div class="sm:col-span-5 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Masukkan Nilai Pecahan (Gunakan Titik atau Koma):</label>
                <input type="text" id="b1f_val" value="25.625" oninput="runBab1FracConvert()" placeholder="Contoh: 25.625" class="w-full bg-slate-950 border border-purple-500/40 rounded-xl p-2.5 text-sm text-purple-300 font-mono-code focus:outline-none focus:border-purple-400 font-bold" />
              </div>

              <!-- Target Basis Pecahan -->
              <div class="sm:col-span-4 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Konversi Pecahan Ke (Target):</label>
                <select id="b1f_to" onchange="runBab1FracConvert()" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-pink-400 font-mono-code">
                  <option value="ALL">Tampilkan Semua Basis Pecahan Sekaligus</option>
                  <option value="2">Biner Pecahan</option>
                  <option value="8">Oktal Pecahan</option>
                  <option value="10">Desimal Pecahan</option>
                  <option value="16">Heksadesimal Pecahan</option>
                </select>
              </div>
            </div>

            <!-- Hasil Konversi Pecahan -->
            <div id="b1f_output" class="bg-slate-950/80 p-4 rounded-xl border border-purple-500/20 font-mono-code text-sm">
            </div>

            <!-- Rincian Cara Kerja Matematis Pecahan -->
            <div id="b1f_steps" class="text-xs text-slate-300 space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-slate-800 font-mono-code">
            </div>
          </div>
        </div>
      `;

            runBab1Convert();
            runBab1FracConvert();
        }

        /* Logika Fitur 1: Konverter Bilangan Bulat Multi-Arah */
        function runBab1Convert() {
            const fromBase = parseInt(document.getElementById('b1_from').value);
            const toBase = document.getElementById('b1_to').value;
            const rawVal = document.getElementById('b1_val').value.trim();
            const outDiv = document.getElementById('b1_output');
            const stepDiv = document.getElementById('b1_steps');
            if (!outDiv || !stepDiv) return;

            if (!rawVal) {
                outDiv.innerHTML = '<span class="text-slate-500">Silakan masukkan angka bulat untuk dihitung...</span>';
                stepDiv.innerHTML = "";
                return;
            }

            // Validasi karakter berdasarkan basis
            const validChars = {
                2: /^[01]+$/,
                8: /^[0-7]+$/,
                10: /^[0-9]+$/,
                16: /^[0-9a-fA-F]+$/
            };

            if (!validChars[fromBase].test(rawVal)) {
                outDiv.innerHTML = `<span class="text-rose-400 font-bold">Error: Karakter "${rawVal}" tidak valid untuk Basis ${fromBase}!</span>`;
                stepDiv.innerHTML = `<span class="text-slate-500">Basis ${fromBase} hanya menerima simbol digit yang sesuai.</span>`;
                return;
            }

            const decVal = parseInt(rawVal, fromBase);
            if (isNaN(decVal)) {
                outDiv.innerHTML = '<span class="text-rose-400 font-bold">Input tidak dapat diproses.</span>';
                stepDiv.innerHTML = "";
                return;
            }

            const biner = decVal.toString(2);
            const oktal = decVal.toString(8);
            const heksa = decVal.toString(16).toUpperCase();

            if (toBase === 'ALL') {
                outDiv.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-3 rounded-lg bg-slate-900 border border-cyan-500/20">
              <span class="text-slate-500 text-xs block">Desimal (Basis 10):</span>
              <span class="text-cyan-300 font-bold text-base">${decVal}</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-purple-500/20">
              <span class="text-slate-500 text-xs block">Biner (Basis 2):</span>
              <span class="text-purple-300 font-bold text-base">${biner}</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-pink-500/20">
              <span class="text-slate-500 text-xs block">Oktal (Basis 8):</span>
              <span class="text-pink-300 font-bold text-base">${oktal}</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-emerald-500/20">
              <span class="text-slate-500 text-xs block">Heksadesimal (Basis 16):</span>
              <span class="text-emerald-300 font-bold text-base">0x${heksa}</span>
            </div>
          </div>
        `;
            } else {
                const tb = parseInt(toBase);
                const res = decVal.toString(tb).toUpperCase();
                outDiv.innerHTML = `
          <div class="flex items-center justify-between p-2">
            <span class="text-slate-400 text-xs">Hasil Konversi dari Basis ${fromBase} ke Basis ${tb}:</span>
            <span class="text-xl font-bold text-cyan-300 font-mono-code">${res} <sub class="text-xs text-slate-500">${tb}</sub></span>
          </div>
        `;
            }

            // Langkah Perhitungan Matematis
            stepDiv.innerHTML = `
        <div class="font-bold text-slate-200 mb-1">Rincian Perhitungan Matematis:</div>
        <div>1. Konversi ke Nilai Desimal Bersih: <code class="text-cyan-300">${rawVal}${fromBase === 10 ? '' : ' (' + fromBase + ')'} = ${decVal}₁₀</code></div>
        <div>2. Konversi Radiks:
          Biner: <code>${biner}₂</code> • 
          Oktal: <code>${oktal}₈</code> • 
          Heksadesimal: <code>${heksa}₁₆</code>
        </div>
        <div class="text-[11px] text-slate-400 pt-1">
          <em>Metode Kerja:</em> Konversi dari desimal ke basis lain dilakukan dengan pembagian berulang oleh radiks tujuan dan mencatat sisa bagi dari bawah ke atas.
        </div>
      `;
        }

        /* Logika Fitur 2: Konverter Bilangan Pecahan Multi-Arah */
        function runBab1FracConvert() {
            const fromBase = parseInt(document.getElementById('b1f_from').value);
            const toBase = document.getElementById('b1f_to').value;
            const rawVal = document.getElementById('b1f_val').value.trim().replace(',', '.');
            const outDiv = document.getElementById('b1f_output');
            const stepDiv = document.getElementById('b1f_steps');
            if (!outDiv || !stepDiv) return;

            if (!rawVal) {
                outDiv.innerHTML = '<span class="text-slate-500">Silakan masukkan angka pecahan untuk dihitung...</span>';
                stepDiv.innerHTML = "";
                return;
            }

            const parts = rawVal.split('.');
            const intStr = parts[0] || '0';
            const fracStr = parts[1] || '0';

            // Validasi karakter
            const validChars = {
                2: /^[01]+$/,
                8: /^[0-7]+$/,
                10: /^[0-9]+$/,
                16: /^[0-9a-fA-F]+$/
            };

            if (!validChars[fromBase].test(intStr) || (parts.length > 1 && !validChars[fromBase].test(fracStr))) {
                outDiv.innerHTML = `<span class="text-rose-400 font-bold">Error: Format pecahan "${rawVal}" tidak valid untuk Basis ${fromBase}!</span>`;
                stepDiv.innerHTML = "";
                return;
            }

            // 1. Konversi Bagian Bulat ke Desimal
            const intDec = parseInt(intStr, fromBase);

            // 2. Konversi Bagian Pecahan ke Desimal
            let fracDec = 0;
            let fracMathStep = [];
            for (let i = 0; i < fracStr.length; i++) {
                const digitVal = parseInt(fracStr[i], fromBase);
                const weight = Math.pow(fromBase, -(i + 1));
                fracDec += digitVal * weight;
                if (i < 4) {
                    fracMathStep.push(`(${digitVal} × ${fromBase}⁻${i + 1})`);
                }
            }
            const totalDec = intDec + fracDec;

            // Fungsi bantuan konversi desimal pecahan ke basis target
            function decFracToBase(fracFloat, targetBase, maxDigits = 6) {
                let res = '';
                let curr = fracFloat;
                let count = 0;
                while (curr > 0 && count < maxDigits) {
                    curr *= targetBase;
                    const digit = Math.floor(curr);
                    res += digit.toString(targetBase).toUpperCase();
                    curr -= digit;
                    count++;
                }
                return res || '0';
            }

            const binFrac = decFracToBase(fracDec, 2, 8);
            const octFrac = decFracToBase(fracDec, 8, 4);
            const hexFrac = decFracToBase(fracDec, 16, 4);

            const fullBin = intDec.toString(2) + '.' + binFrac;
            const fullOct = intDec.toString(8) + '.' + octFrac;
            const fullHex = intDec.toString(16).toUpperCase() + '.' + hexFrac;
            const fullDec = totalDec.toFixed(6).replace(/\.?0+$/, "");

            if (toBase === 'ALL') {
                outDiv.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div class="p-3 rounded-lg bg-slate-900 border border-purple-500/20">
              <span class="text-slate-500 text-xs block">Desimal Pecahan (10):</span>
              <span class="text-purple-300 font-bold text-sm sm:text-base">${fullDec}</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-cyan-500/20">
              <span class="text-slate-500 text-xs block">Biner Pecahan (2):</span>
              <span class="text-cyan-300 font-bold text-sm sm:text-base">${fullBin}</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-pink-500/20">
              <span class="text-slate-500 text-xs block">Oktal Pecahan (8):</span>
              <span class="text-pink-300 font-bold text-sm sm:text-base">${fullOct}</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-emerald-500/20">
              <span class="text-slate-500 text-xs block">Heksadesimal Pecahan (16):</span>
              <span class="text-emerald-300 font-bold text-sm sm:text-base">${fullHex}</span>
            </div>
          </div>
        `;
            } else {
                const tb = parseInt(toBase);
                let resStr = "";
                if (tb === 10) resStr = fullDec;
                else if (tb === 2) resStr = fullBin;
                else if (tb === 8) resStr = fullOct;
                else if (tb === 16) resStr = fullHex;

                outDiv.innerHTML = `
          <div class="flex items-center justify-between p-2">
            <span class="text-slate-400 text-xs">Hasil Pecahan dalam Basis ${tb}:</span>
            <span class="text-xl font-bold text-purple-300 font-mono-code">${resStr} <sub class="text-xs text-slate-500">${tb}</sub></span>
          </div>
        `;
            }

            stepDiv.innerHTML = `
        <div class="font-bold text-slate-200 mb-1">Cara & Prinsip Kerja Perhitungan Pecahan:</div>
        <div>1. <strong>Bagian Bulat:</strong> <code>${intStr}${fromBase === 10 ? '' : ' (' + fromBase + ')'} = ${intDec}₁₀</code></div>
        <div>2. <strong>Bagian Pecahan ke Desimal:</strong> <code>0.${fracStr}${fromBase === 10 ? '' : ' (' + fromBase + ')'} = ${fracMathStep.join(' + ') || '0'} = ${fracDec.toFixed(6)}₁₀</code></div>
        <div>3. <strong>Total Desimal:</strong> <code>${fullDec}₁₀</code></div>
        <div>4. <strong>Perkalian Bertahap untuk Biner:</strong> Bagian desimal pecahan dikalikan 2 secara berulang hingga diperoleh nilai 1.0 atau batas ketelitian yang diinginkan (didapat <code>0.${binFrac}₂</code>).</div>
        <div class="text-[11px] text-slate-400 pt-1">
          <em>Teknik Grouping:</em> Dari koma ke kanan, kelompokkan tiap 3 bit untuk Oktal (contoh: <code>${binFrac.padEnd(6, '0').substring(0, 3)}₂ = ${octFrac[0]}₈</code>) dan tiap 4 bit untuk Heksadesimal.
        </div>
      `;
        }


        /* ==========================================================
           PERTEMUAN 2: METODE REPRESENTASI BILANGAN NEGATIF
           ========================================================== */
        function renderBab2(container) {
            container.innerHTML = `
        <!-- Sub-navigasi Tab Fitur Pertemuan 2 -->
        <div class="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button data-bab-tab="2" data-tab-target="beranda" onclick="switchBabTab(2, 'beranda')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono-code transition bg-cyan-600 text-white shadow-md border border-cyan-400 active-bab-tab cursor-pointer">
              <span>🏠 Beranda Materi</span>
            </button>
            <button data-bab-tab="2" data-tab-target="fitur1" onclick="switchBabTab(2, 'fitur1')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono-code transition bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 cursor-pointer">
              <span>± Fitur 1: Konversi Negatif 2-Arah</span>
            </button>
          </div>
          <button onclick="launchQuiz(2)" class="holo-btn px-4 py-1.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow cursor-pointer">
            <span>📝 Kuis (20 Soal)</span>
          </button>
        </div>

        <!-- ==================== TAB 1: BERANDA MATERI PERTEMUAN 2 ==================== -->
        <div id="bab2_sec_beranda" data-bab="2" class="space-y-6">
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div class="inline-block text-xs font-mono-code text-purple-400 bg-purple-950/40 px-2.5 py-1 rounded border border-purple-800">
                Materi Pokok Pertemuan 02
              </div>
              <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-2 transition hover:scale-105 shadow-md group" title="Buka Materi Lengkap Bab 2 di Google Drive">
                <svg class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                <span>Materi Lengkap Bab 2 (Google Drive)</span>
                <span class="text-emerald-400 font-bold">↗</span>
              </a>
            </div>

            <div>
              <h2 class="text-2xl sm:text-3xl font-black text-white">Metode Representasi Bilangan Negatif</h2>
              <p class="text-sm text-slate-300 leading-relaxed mt-2">
                Dalam rangkaian komputer digital, tanda negatif (-) tidak dapat disimpan secara fisik selain menggunakan bit <strong>0</strong> dan <strong>1</strong>. Oleh karena itu, dikembangkan tiga metode representasi bilangan bertanda (*signed numbers*) dengan aturan, rentang matematis, dan sifat sirkuit yang berbeda: <strong>MSB (Sign-Magnitude)</strong>, <strong>1's Complement (Komplemen 1)</strong>, dan <strong>2's Complement (Komplemen 2)</strong>.
              </p>
            </div>

            <!-- Komparasi 3 Metode Representasi Bilangan Negatif -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              
              <!-- MSB (Sign-Magnitude) -->
              <div class="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-cyan-400 text-sm">1. MSB (Sign-Magnitude)</span>
                  <span class="text-[10px] font-mono-code px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">Bit Tanda</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Bit paling kiri (<strong>MSB</strong>) dialokasikan sebagai penanda: <code class="text-emerald-400">0 = Positif (+)</code>, <code class="text-rose-400">1 = Negatif (-)</code>. Sisa (n-1) bit adalah nilai mutlak besaran (*magnitude*).
                </p>
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono-code text-slate-300 space-y-1">
                  <div>Rentang: <code>-(2ⁿ⁻¹ - 1) s.d. +(2ⁿ⁻¹ - 1)</code></div>
                  <div>8-bit: <code>-127 s.d. +127</code></div>
                  <div class="text-rose-400 font-sans">Kelemahan: Memiliki dua nol (+0 & -0).</div>
                </div>
              </div>

              <!-- 1's Complement -->
              <div class="p-5 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-purple-400 text-sm">2. 1's Complement (C1)</span>
                  <span class="text-[10px] font-mono-code px-2 py-0.5 rounded bg-purple-950 border border-purple-800 text-purple-300">Bit Inversion</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Nilai negatif diperoleh dengan <strong>membalik seluruh bit</strong> bilangan positif (bit 0 diubah menjadi 1, dan bit 1 diubah menjadi 0).
                </p>
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono-code text-slate-300 space-y-1">
                  <div>Rentang: <code>-(2ⁿ⁻¹ - 1) s.d. +(2ⁿ⁻¹ - 1)</code></div>
                  <div>8-bit: <code>-127 s.d. +127</code></div>
                  <div class="text-amber-400 font-sans">Kelemahan: Operasi butuh end-around carry & dua nol.</div>
                </div>
              </div>

              <!-- 2's Complement -->
              <div class="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-emerald-400 text-sm">3. 2's Complement (C2)</span>
                  <span class="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300">Standar CPU</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Diperoleh dengan cara <strong>Komplemen 1 ditambah 1</strong> (C2 = C1 + 1), atau rumus <code>2ⁿ - |N|</code>. Menghilangkan redundansi nilai nol ganda.
                </p>
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono-code text-slate-300 space-y-1">
                  <div>Rentang: <code>-2ⁿ⁻¹ s.d. +(2ⁿ⁻¹ - 1)</code></div>
                  <div>8-bit: <code>-128 s.d. +127</code></div>
                  <div class="text-emerald-400 font-sans">Keunggulan: Pengurangan langsung A - B = A + C2(B).</div>
                </div>
              </div>

            </div>

            <!-- PUSAT TOMBOL FITUR PRAKTIKUM PERTEMUAN 02 -->
            <div class="space-y-4 pt-4 border-t border-slate-800">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-base font-bold text-white flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
                    Pusat Fitur & Alat Interaktif Pertemuan 02
                  </h4>
                  <p class="text-xs text-slate-400">Pilih alat praktikum di bawah ini sesuai kebutuhan Anda:</p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                
                <!-- Kartu Tombol Fitur 1: Bilangan Negatif -->
                <div onclick="switchBabTab(2, 'fitur1')" class="holo-card p-5 rounded-2xl border-purple-500/30 hover:border-purple-400 hover:scale-[1.02] transition cursor-pointer group flex flex-col justify-between space-y-3">
                  <div class="space-y-2.5">
                    <div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-400 flex items-center justify-center text-xl font-bold">
                      ±
                    </div>
                    <span class="text-[10px] font-mono-code font-bold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800">Fitur 1</span>
                    <h5 class="text-sm font-bold text-white group-hover:text-purple-300 transition">Kalkulator Konversi Bilangan Negatif & Balik</h5>
                    <p class="text-xs text-slate-400 leading-relaxed">Konversikan desimal bertanda ke Biner, Oktal, Heksa atau sebaliknya menggunakan metode MSB, 1's Complement, dan 2's Complement.</p>
                  </div>
                  <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-purple-400 font-semibold font-mono-code">
                    <span>Buka Fitur 1</span>
                    <span class="group-hover:translate-x-1 transition">➔</span>
                  </div>
                </div>

                <!-- Kartu Tombol Kuis Evaluasi -->
                <div onclick="launchQuiz(2)" class="holo-card p-5 rounded-2xl border-pink-500/30 hover:border-pink-400 hover:scale-[1.02] transition cursor-pointer group flex flex-col justify-between space-y-3">
                  <div class="space-y-2.5">
                    <div class="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/40 text-pink-400 flex items-center justify-center text-xl font-bold">
                      🏆
                    </div>
                    <span class="text-[10px] font-mono-code font-bold text-pink-400 bg-pink-950/60 px-2 py-0.5 rounded border border-pink-800">Evaluasi Mandiri</span>
                    <h5 class="text-sm font-bold text-white group-hover:text-pink-300 transition">Kuis Evaluasi Bab 2 (20 Soal)</h5>
                    <p class="text-xs text-slate-400 leading-relaxed">Uji pemahaman komprehensif komplemen biner, deteksi overflow ALU, dan cetak sertifikat resmi.</p>
                  </div>
                  <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-pink-400 font-semibold font-mono-code">
                    <span>Mulai Kuis 20 Soal</span>
                    <span class="group-hover:translate-x-1 transition">➔</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <!-- Banner Unduh Materi Bab 2 di Google Drive -->
          <div class="holo-card p-5 sm:p-6 rounded-2xl border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                📁
              </div>
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-emerald-400 mb-0.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Dokumen & Modul Kuliah Pertemuan 02
                </div>
                <h4 class="font-bold text-white text-base">Unduh Materi Lengkap Bab 2 di Google Drive</h4>
                <p class="text-xs text-slate-300">Akses slide bilangan bertanda, Two's Complement, analisis overflow ALU, dan contoh soal.</p>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-emerald-200 hover:text-white flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:scale-105 transition">
              <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
              <span>Buka Materi di Google Drive ↗</span>
            </a>
          </div>
        </div>

        <!-- ==================== TAB 2: FITUR 1 (BILANGAN NEGATIF) ==================== -->
        <div id="bab2_sec_fitur1" data-bab="2" class="hidden space-y-4">
          <button onclick="switchBabTab(2, 'beranda')" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-400 text-xs font-mono-code text-purple-400 transition hover:scale-105 cursor-pointer">
            <span>←</span>
            <span>Kembali ke Beranda Materi Bab 2</span>
          </button>

          <!-- FITUR 1: KALKULATOR KONVERSI BILANGAN NEGATIF DUA ARAH -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-purple-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800 mb-1">
                  <span>Fitur 1</span> • Konversi Negatif 2-Arah
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-purple-400 text-xl">±</span> Kalkulator Konversi Bilangan Negatif & Konversi Balik (MSB, C1, & C2)
                </h3>
                <p class="text-xs text-slate-400">
                  Pilih metode (MSB, 1's, 2's), tentukan lebar bit, dan konversikan bilangan negatif ke Biner, Oktal, Heksadesimal atau sebaliknya!
                </p>
              </div>
            </div>

            <!-- Pilihan Arah Konversi (Tab Mode) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button id="b2_dir_fwd" onclick="switchBab2Direction('fwd')" class="p-3 rounded-xl border text-xs font-bold font-mono-code flex items-center justify-center gap-2 transition bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <span>➔ Arah 1: Desimal Negatif / Bertanda ke Biner, Oktal, Hex</span>
              </button>
              <button id="b2_dir_rev" onclick="switchBab2Direction('rev')" class="p-3 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-white text-xs font-bold font-mono-code flex items-center justify-center gap-2 transition">
                <span>➔ Arah 2: Biner / Oktal / Hex ke Nilai Desimal Negatif</span>
              </button>
            </div>

            <!-- Parameter Kontrol: Metode & Lebar Bit -->
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              
              <!-- Pilihan Metode -->
              <div class="sm:col-span-4 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Metode Representasi:</label>
                <select id="b2_method" onchange="runBab2SignedCalc()" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-purple-400 font-mono-code">
                  <option value="ALL">Perbandingan Ketiga Metode Sekaligus</option>
                  <option value="C2">2's Complement (Komplemen 2) - Standar ALU</option>
                  <option value="C1">1's Complement (Komplemen 1)</option>
                  <option value="MSB">MSB (Sign-Magnitude / Bit Tanda)</option>
                </select>
              </div>

              <!-- Lebar Bit -->
              <div class="sm:col-span-3 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Lebar Bit (Word Size):</label>
                <select id="b2_bits" onchange="runBab2SignedCalc()" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-cyan-400 font-mono-code">
                  <option value="8">8-bit (Rentang: -128 s.d. +127)</option>
                  <option value="4">4-bit (Rentang: -8 s.d. +7)</option>
                  <option value="16">16-bit (Rentang: -32768 s.d. +32767)</option>
                </select>
              </div>

              <!-- Input Nilai -->
              <div class="sm:col-span-5 space-y-1">
                <label id="b2_input_label" class="text-xs text-slate-400 block font-semibold">Masukkan Nilai Desimal Bertanda (Contoh: -25):</label>
                <div class="flex gap-2">
                  <select id="b2_rev_base" onchange="runBab2SignedCalc()" class="hidden bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white font-mono-code">
                    <option value="2">Biner</option>
                    <option value="8">Oktal</option>
                    <option value="16">Heksa</option>
                  </select>
                  <input type="text" id="b2_val" value="-25" oninput="runBab2SignedCalc()" placeholder="Contoh: -25" class="w-full bg-slate-950 border border-purple-500/40 rounded-xl p-2.5 text-sm text-purple-300 font-mono-code focus:outline-none focus:border-purple-400 font-bold" />
                </div>
              </div>

            </div>

            <!-- Rentang Informasi dan Syarat Metode Terpilih -->
            <div id="b2_range_badge" class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2 font-mono-code">
              <span>Rentang Valid 8-bit 2's Complement: <strong>-128 s.d. +127</strong></span>
              <span class="text-cyan-400">MSB (Bit 7) = Bit Tanda</span>
            </div>

            <!-- Hasil Output Konversi -->
            <div id="b2_output" class="bg-slate-950/80 p-4 rounded-xl border border-purple-500/20 font-mono-code text-sm">
            </div>

            <!-- Visualisasi Pembagian Bit (MSB Tanda vs Magnitude) -->
            <div id="b2_bit_visual" class="space-y-2 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
            </div>

            <!-- Rincian Langkah Matematis -->
            <div id="b2_steps" class="text-xs text-slate-300 space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-slate-800 font-mono-code">
            </div>
          </div>
        </div>
      `;

            runBab2SignedCalc();
        }

        let bab2CurrentDirection = 'fwd'; // 'fwd' (Desimal -> Biner/Okt/Hex) atau 'rev' (Biner/Okt/Hex -> Desimal)

        function switchBab2Direction(dir) {
            bab2CurrentDirection = dir;
            const btnFwd = document.getElementById('b2_dir_fwd');
            const btnRev = document.getElementById('b2_dir_rev');
            const lbl = document.getElementById('b2_input_label');
            const revBase = document.getElementById('b2_rev_base');
            const inpVal = document.getElementById('b2_val');

            if (dir === 'fwd') {
                btnFwd.className = "p-3 rounded-xl border text-xs font-bold font-mono-code flex items-center justify-center gap-2 transition bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]";
                btnRev.className = "p-3 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-white text-xs font-bold font-mono-code flex items-center justify-center gap-2 transition";
                lbl.innerText = "Masukkan Nilai Desimal Bertanda (Contoh: -25):";
                revBase.classList.add('hidden');
                inpVal.value = "-25";
            } else {
                btnRev.className = "p-3 rounded-xl border text-xs font-bold font-mono-code flex items-center justify-center gap-2 transition bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]";
                btnFwd.className = "p-3 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-white text-xs font-bold font-mono-code flex items-center justify-center gap-2 transition";
                lbl.innerText = "Pilih Basis & Masukkan Representasi Bertanda:";
                revBase.classList.remove('hidden');
                inpVal.value = "11100111"; // -25 dalam 8-bit 2's comp
            }
            runBab2SignedCalc();
        }

        function runBab2SignedCalc() {
            const bits = parseInt(document.getElementById('b2_bits').value);
            const method = document.getElementById('b2_method').value;
            const rawVal = document.getElementById('b2_val').value.trim();
            const outDiv = document.getElementById('b2_output');
            const bitVisDiv = document.getElementById('b2_bit_visual');
            const stepDiv = document.getElementById('b2_steps');
            const badgeDiv = document.getElementById('b2_range_badge');
            if (!outDiv || !stepDiv) return;

            const minValC2 = -Math.pow(2, bits - 1);
            const maxValC2 = Math.pow(2, bits - 1) - 1;
            const minValSym = -(Math.pow(2, bits - 1) - 1);
            const maxValSym = Math.pow(2, bits - 1) - 1;

            if (badgeDiv) {
                badgeDiv.innerHTML = `
          <span>Rentang ${bits}-bit: 
            <strong>C2: [${minValC2} s.d. +${maxValC2}]</strong> | 
            <strong>MSB & C1: [${minValSym} s.d. +${maxValSym}]</strong>
          </span>
          <span class="text-cyan-400">MSB (Bit ${bits - 1}) = Bit Tanda</span>
        `;
            }

            if (!rawVal) {
                outDiv.innerHTML = '<span class="text-slate-500">Silakan masukkan angka untuk dikonversi...</span>';
                bitVisDiv.innerHTML = "";
                stepDiv.innerHTML = "";
                return;
            }

            // ==================== MODE 1: MAJU (Desimal Bertanda -> Biner/Okt/Hex) ====================
            if (bab2CurrentDirection === 'fwd') {
                const val = parseInt(rawVal, 10);
                if (isNaN(val)) {
                    outDiv.innerHTML = '<span class="text-rose-400 font-bold">Error: Masukkan angka bulat desimal yang valid (positif atau negatif)!</span>';
                    stepDiv.innerHTML = "";
                    bitVisDiv.innerHTML = "";
                    return;
                }

                // Cek batasan rentang
                const limitMin = (method === 'C2') ? minValC2 : minValSym;
                const limitMax = maxValC2;

                if (val < limitMin || val > limitMax) {
                    outDiv.innerHTML = `<span class="text-rose-400 font-bold">⚠️ Nilai ${val} berada DI LUAR RENTANG ${bits}-bit (${limitMin} s.d. +${limitMax})! Terjadi Overflow.</span>`;
                    stepDiv.innerHTML = `<div class="text-slate-400">Untuk menyimpan ${val}, gunakan lebar bit yang lebih besar (misal 16-bit).</div>`;
                    bitVisDiv.innerHTML = "";
                    return;
                }

                // 1. Hitung 2's Complement
                let c2Unsigned = (val < 0) ? (Math.pow(2, bits) + val) : val;
                let c2Bin = c2Unsigned.toString(2).padStart(bits, '0');
                let c2Oct = c2Unsigned.toString(8).padStart(Math.ceil(bits / 3), '0');
                let c2Hex = c2Unsigned.toString(16).toUpperCase().padStart(Math.ceil(bits / 4), '0');

                // 2. Hitung Sign-Magnitude (MSB)
                let smBin = "";
                if (val >= 0) {
                    smBin = val.toString(2).padStart(bits, '0');
                } else {
                    const mag = Math.abs(val).toString(2).padStart(bits - 1, '0');
                    smBin = '1' + mag;
                }
                let smUnsigned = parseInt(smBin, 2);
                let smOct = smUnsigned.toString(8).padStart(Math.ceil(bits / 3), '0');
                let smHex = smUnsigned.toString(16).toUpperCase().padStart(Math.ceil(bits / 4), '0');

                // 3. Hitung 1's Complement (C1)
                let c1Bin = "";
                if (val >= 0) {
                    c1Bin = val.toString(2).padStart(bits, '0');
                } else {
                    const posBin = Math.abs(val).toString(2).padStart(bits, '0');
                    c1Bin = posBin.split('').map(b => b === '0' ? '1' : '0').join('');
                }
                let c1Unsigned = parseInt(c1Bin, 2);
                let c1Oct = c1Unsigned.toString(8).padStart(Math.ceil(bits / 3), '0');
                let c1Hex = c1Unsigned.toString(16).toUpperCase().padStart(Math.ceil(bits / 4), '0');

                // Render Kartu Hasil
                if (method === 'ALL') {
                    outDiv.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-1">
                <span class="text-xs text-emerald-400 font-bold block">2's Complement (C2) - Standar CPU</span>
                <div class="text-base text-cyan-300 font-bold">${c2Bin}₂</div>
                <div class="text-xs text-slate-400">Oktal: ${c2Oct}₈ | Hex: 0x${c2Hex}</div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-900 border border-purple-500/30 space-y-1">
                <span class="text-xs text-purple-400 font-bold block">1's Complement (C1)</span>
                <div class="text-base text-purple-300 font-bold">${c1Bin}₂</div>
                <div class="text-xs text-slate-400">Oktal: ${c1Oct}₈ | Hex: 0x${c1Hex}</div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-1">
                <span class="text-xs text-cyan-400 font-bold block">MSB (Sign-Magnitude)</span>
                <div class="text-base text-pink-300 font-bold">${smBin}₂</div>
                <div class="text-xs text-slate-400">Oktal: ${smOct}₈ | Hex: 0x${smHex}</div>
              </div>
            </div>
          `;
                } else {
                    let chosenBin = c2Bin, chosenOct = c2Oct, chosenHex = c2Hex, chosenLabel = "2's Complement";
                    if (method === 'C1') { chosenBin = c1Bin; chosenOct = c1Oct; chosenHex = c1Hex; chosenLabel = "1's Complement"; }
                    if (method === 'MSB') { chosenBin = smBin; chosenOct = smOct; chosenHex = smHex; chosenLabel = "MSB (Sign-Magnitude)"; }

                    outDiv.innerHTML = `
            <div class="space-y-2 p-2">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-slate-400 text-xs">Hasil Konversi (${chosenLabel} - ${bits}-bit):</span>
                <span class="text-xl font-bold text-cyan-300 font-mono-code">${chosenBin}₂</span>
              </div>
              <div class="grid grid-cols-2 gap-3 pt-1">
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-[11px] text-slate-400 block">Representasi Oktal:</span>
                  <span class="text-base font-bold text-pink-300">${chosenOct}₈</span>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-[11px] text-slate-400 block">Representasi Heksadesimal:</span>
                  <span class="text-base font-bold text-emerald-300">0x${chosenHex}</span>
                </div>
              </div>
            </div>
          `;
                }

                // Visualisasi Bit Tanda (MSB) vs Magnitude
                const activeBin = (method === 'C1') ? c1Bin : (method === 'MSB' ? smBin : c2Bin);
                const signBit = activeBin[0];
                const magBits = activeBin.substring(1);

                bitVisDiv.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-300 font-bold">Visualisasi Struktur Bit (${bits}-bit):</span>
            <span class="text-slate-400 font-mono-code">Total: ${bits} bit</span>
          </div>
          <div class="flex items-center gap-1.5 font-mono-code text-sm pt-1 overflow-x-auto pb-1">
            <div class="flex flex-col items-center">
              <span class="text-[10px] text-rose-400 font-bold mb-0.5">MSB</span>
              <div class="w-9 h-10 rounded-lg ${signBit === '1' ? 'bg-rose-950/80 border-2 border-rose-500 text-rose-300 font-black shadow-[0_0_10px_rgba(244,63,94,0.4)]' : 'bg-slate-950 border border-slate-700 text-slate-400'} flex items-center justify-center">
                ${signBit}
              </div>
              <span class="text-[9px] text-rose-400/80 mt-0.5">${signBit === '1' ? 'Negatif' : 'Positif'}</span>
            </div>
            ${magBits.split('').map((b, i) => `
              <div class="flex flex-col items-center">
                <span class="text-[10px] text-slate-500 mb-0.5">b${bits - 2 - i}</span>
                <div class="w-8 h-10 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-300 font-bold flex items-center justify-center">
                  ${b}
                </div>
                <span class="text-[9px] text-slate-600 mt-0.5">2^${bits - 2 - i}</span>
              </div>
            `).join('')}
          </div>
        `;

                // Rincian Langkah Matematis
                stepDiv.innerHTML = `
          <div class="font-bold text-slate-200 mb-1">Rincian Pembentukan Bilangan Bertanda:</div>
          <div>1. Nilai Desimal: <code class="text-cyan-400">${val}₁₀</code> (${val < 0 ? 'Bilangan Negatif' : 'Bilangan Positif'})</div>
          ${val < 0 ? `
            <div>2. Biner Positif Mutlak (|${val}|): <code>${Math.abs(val).toString(2).padStart(bits, '0')}₂</code></div>
            <div>3. Komplemen 1 (C1 - balik seluruh bit): <code>${c1Bin}₂</code></div>
            <div>4. Komplemen 2 (C2 = C1 + 1): <code>${c1Bin}₂ + 1 = ${c2Bin}₂</code></div>
            <div>5. MSB (Sign-Magnitude - bit tanda '1' + magnitude): <code>1 + ${Math.abs(val).toString(2).padStart(bits - 1, '0')} = ${smBin}₂</code></div>
          ` : `
            <div>2. Karena bilangan positif (${val} >= 0), representasi ketiga metode (MSB, C1, dan C2) adalah <strong>identik</strong>: <code>${c2Bin}₂</code></div>
          `}
        `;

                // ==================== MODE 2: BALIK (Biner/Okt/Hex -> Desimal Negatif) ====================
            } else {
                const revBase = parseInt(document.getElementById('b2_rev_base').value);
                let unsignedVal = parseInt(rawVal, revBase);

                if (isNaN(unsignedVal)) {
                    outDiv.innerHTML = '<span class="text-rose-400 font-bold">Format input tidak valid!</span>';
                    stepDiv.innerHTML = "";
                    bitVisDiv.innerHTML = "";
                    return;
                }

                let binStr = unsignedVal.toString(2);
                if (binStr.length > bits) {
                    binStr = binStr.slice(-bits); // ambil LSB sejumlah bits
                    unsignedVal = parseInt(binStr, 2);
                } else {
                    binStr = binStr.padStart(bits, '0');
                }

                const isNeg = (binStr[0] === '1');
                let decMSB = 0;
                let decC1 = 0;
                let decC2 = 0;

                if (!isNeg) {
                    // MSB = 0 -> Bilangan Positif
                    decMSB = unsignedVal;
                    decC1 = unsignedVal;
                    decC2 = unsignedVal;
                } else {
                    // MSB = 1 -> Bilangan Negatif
                    // 1. Nilai MSB (Sign-Magnitude)
                    const magVal = parseInt(binStr.substring(1), 2);
                    decMSB = -magVal;

                    // 2. Nilai 1's Complement (Invers kembali)
                    const invertedBin = binStr.split('').map(b => b === '0' ? '1' : '0').join('');
                    decC1 = -parseInt(invertedBin, 2);

                    // 3. Nilai 2's Complement
                    decC2 = unsignedVal - Math.pow(2, bits);
                }

                let targetDec = decC2;
                let targetMethodLabel = "2's Complement";
                if (method === 'C1') { targetDec = decC1; targetMethodLabel = "1's Complement"; }
                if (method === 'MSB') { targetDec = decMSB; targetMethodLabel = "MSB (Sign-Magnitude)"; }

                outDiv.innerHTML = `
          <div class="space-y-3 p-2">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
              <span class="text-slate-400 text-xs">Hasil Konversi Balik ke Desimal (${targetMethodLabel}):</span>
              <span class="text-2xl font-bold ${targetDec < 0 ? 'text-rose-400' : 'text-cyan-300'} font-mono-code">${targetDec}₁₀</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-code">
              <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span class="text-slate-400 block text-[11px]">Interpretasi C2:</span>
                <b class="text-base ${decC2 < 0 ? 'text-rose-400' : 'text-emerald-400'}">${decC2}</b>
              </div>
              <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span class="text-slate-400 block text-[11px]">Interpretasi C1:</span>
                <b class="text-base ${decC1 < 0 ? 'text-rose-400' : 'text-purple-400'}">${decC1}</b>
              </div>
              <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span class="text-slate-400 block text-[11px]">Interpretasi MSB:</span>
                <b class="text-base ${decMSB < 0 ? 'text-rose-400' : 'text-pink-400'}">${decMSB}</b>
              </div>
            </div>
          </div>
        `;

                // Visualisasi Bit
                const signBit = binStr[0];
                const magBits = binStr.substring(1);
                bitVisDiv.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-300 font-bold">Bit Masukan (${bits}-bit Biner Terformat):</span>
            <span class="text-cyan-300 font-mono-code">${binStr}₂</span>
          </div>
          <div class="flex items-center gap-1.5 font-mono-code text-sm pt-1 overflow-x-auto pb-1">
            <div class="flex flex-col items-center">
              <span class="text-[10px] text-rose-400 font-bold mb-0.5">MSB</span>
              <div class="w-9 h-10 rounded-lg ${signBit === '1' ? 'bg-rose-950/80 border-2 border-rose-500 text-rose-300 font-black shadow-[0_0_10px_rgba(244,63,94,0.4)]' : 'bg-slate-950 border border-slate-700 text-slate-400'} flex items-center justify-center">
                ${signBit}
              </div>
              <span class="text-[9px] text-rose-400 mt-0.5">${signBit === '1' ? 'Tanda (-)' : 'Tanda (+)'}</span>
            </div>
            ${magBits.split('').map((b, i) => `
              <div class="flex flex-col items-center">
                <span class="text-[10px] text-slate-500 mb-0.5">b${bits - 2 - i}</span>
                <div class="w-8 h-10 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-300 font-bold flex items-center justify-center">
                  ${b}
                </div>
              </div>
            `).join('')}
          </div>
        `;

                stepDiv.innerHTML = `
          <div class="font-bold text-slate-200 mb-1">Rincian Perhitungan Konversi Balik:</div>
          <div>1. Format Biner Masukan (${bits}-bit): <code>${binStr}₂</code> (MSB = ${signBit})</div>
          ${isNeg ? `
            <div>2. Karena MSB = 1, bilangan ini bernilai <strong>NEGATIF</strong>.</div>
            <div>3. Hitung Desimal Balik via 2's Complement: <code>${unsignedVal} - 2^${bits} = ${unsignedVal} - ${Math.pow(2, bits)} = ${decC2}₁₀</code></div>
            <div>4. Hitung Desimal Balik via 1's Complement: Inversi bit menghasilkan <code>${binStr.split('').map(b => b === '0' ? '1' : '0').join('')}₂</code>, bernilai <code>${decC1}₁₀</code></div>
            <div>5. Hitung Desimal Balik via MSB: Magnitude ${bits - 1} bit kanan bernilai <code>${parseInt(magBits, 2)}</code>, diberi tanda negatif menjadi <code>${decMSB}₁₀</code></div>
          ` : `
            <div>2. Karena MSB = 0, bilangan ini bernilai <strong>POSITIF</strong> dengan nilai desimal murni: <code>+${unsignedVal}₁₀</code></div>
          `}
        `;
            }
        }


        /* ==========================================================
           PERTEMUAN 3: ALJABAR BOOLEAN, GERBANG LOGIKA & SIMULATOR
           ========================================================== */
        function renderBab3(container) {
            container.innerHTML = `
        <!-- Sub-Navigasi Fitur Pertemuan 3 -->
        <div class="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
          <button onclick="switchBabTab(3, 'beranda')" data-bab-tab="3" data-tab-target="beranda" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 active-bab-tab">
            <span>🏠</span> <span>Beranda Materi</span>
          </button>
          <button onclick="switchBabTab(3, 'fitur1')" data-bab-tab="3" data-tab-target="fitur1" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800">
            <span>✂️</span> <span>Fitur 1: Kalkulator Boolean</span>
          </button>
          <button onclick="switchBabTab(3, 'fitur2')" data-bab-tab="3" data-tab-target="fitur2" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800">
            <span>📋</span> <span>Fitur 2: Tabel Kebenaran</span>
          </button>
          <button onclick="switchBabTab(3, 'fitur3')" data-bab-tab="3" data-tab-target="fitur3" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800">
            <span>⚡</span> <span>Fitur 3: Simulator Proteus</span>
          </button>
          <button onclick="launchQuiz(3)" class="ml-auto px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:scale-105 shadow">
            <span>📝</span> <span>Kuis Pekan 3</span>
          </button>
        </div>

        <!-- ================= BERANDA SECTION ================= -->
        <div id="bab3_sec_beranda" data-bab="3" class="space-y-6">
          <!-- Beranda Materi Pertemuan 3 -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div class="inline-block text-xs font-mono-code text-pink-400 bg-pink-950/40 px-2.5 py-1 rounded border border-pink-800">
                Materi Pokok Pertemuan 03
              </div>
              <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-2 transition hover:scale-105 shadow-md group" title="Buka Materi Lengkap Bab 3 di Google Drive">
                <svg class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                <span>Materi Lengkap Bab 3 (Google Drive)</span>
                <span class="text-emerald-400 font-bold">↗</span>
              </a>
            </div>

            <div>
              <h2 class="text-2xl sm:text-3xl font-black text-white">Aljabar Boolean & Rangkaian Gerbang Logika</h2>
              <p class="text-sm text-slate-300 leading-relaxed mt-2">
                Aljabar Boolean adalah cabang matematika logika biner yang diperkenalkan oleh George Boole (1854) dan diterapkan pada sakelar sirkuit digital oleh Claude Shannon (1938). Beroperasi dengan variabel logika bernilai TRUE (1) atau FALSE (0), aljabar Boolean menjadi dasar dalam perancangan dan penyederhanaan sirkuit digital agar hemat komponen transistor, berdaya rendah, dan memiliki delay propagasi minimum.
              </p>
            </div>

            <!-- Pemaparan 10 Hukum Aljabar Boolean -->
            <div class="space-y-3 pt-2">
              <h4 class="text-sm font-bold text-pink-300 flex items-center gap-2">
                <span>📜</span> 10 Hukum Utama Aljabar Boolean
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs font-mono-code">
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-cyan-400 font-bold block mb-1">1. Identitas</span>
                  <div>A · 1 = A</div>
                  <div>A + 0 = A</div>
                </div>
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-purple-400 font-bold block mb-1">2. Dominansi</span>
                  <div>A · 0 = 0</div>
                  <div>A + 1 = 1</div>
                </div>
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-pink-400 font-bold block mb-1">3. Idempoten</span>
                  <div>A · A = A</div>
                  <div>A + A = A</div>
                </div>
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-emerald-400 font-bold block mb-1">4. Inversi</span>
                  <div>A · A' = 0</div>
                  <div>A + A' = 1</div>
                </div>
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-amber-400 font-bold block mb-1">5. Komutatif</span>
                  <div>A · B = B · A</div>
                  <div>A + B = B + A</div>
                </div>
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-cyan-400 font-bold block mb-1">6. Asosiatif</span>
                  <div>A(BC) = (AB)C</div>
                  <div>A+(B+C)=(A+B)+C</div>
                </div>
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-purple-400 font-bold block mb-1">7. Distributif</span>
                  <div>A(B+C) = AB+AC</div>
                  <div>A+BC = (A+B)(A+C)</div>
                </div>
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-pink-400 font-bold block mb-1">8. De Morgan</span>
                  <div>(A·B)' = A' + B'</div>
                  <div>(A+B)' = A' · B'</div>
                </div>
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-emerald-400 font-bold block mb-1">9. Absorpsi</span>
                  <div>A + AB = A</div>
                  <div>A(A+B) = A</div>
                </div>
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span class="text-amber-400 font-bold block mb-1">10. Konsensus</span>
                  <div class="text-[10px]">AB + A'C + BC = AB + A'C</div>
                </div>
              </div>
            </div>

            <!-- Pemaparan 7 Jenis Gerbang Logika Dasar & Universal -->
            <div class="space-y-3 pt-2">
              <h4 class="text-sm font-bold text-cyan-300 flex items-center gap-2">
                <span>🔌</span> 7 Jenis Gerbang Logika Digital
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center text-xs font-mono-code">
                <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <b class="text-cyan-400 block text-sm">NOT</b>
                  <span class="text-[11px] text-slate-400 block mt-1">Y = A'</span>
                  <span class="text-[10px] text-slate-500">Inverter</span>
                </div>
                <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <b class="text-cyan-400 block text-sm">AND</b>
                  <span class="text-[11px] text-slate-400 block mt-1">Y = A · B</span>
                  <span class="text-[10px] text-slate-500">Konjungsi</span>
                </div>
                <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <b class="text-cyan-400 block text-sm">OR</b>
                  <span class="text-[11px] text-slate-400 block mt-1">Y = A + B</span>
                  <span class="text-[10px] text-slate-500">Disjungsi</span>
                </div>
                <div class="p-3 rounded-xl bg-slate-950 border border-purple-500/30">
                  <b class="text-purple-400 block text-sm">NAND</b>
                  <span class="text-[11px] text-slate-400 block mt-1">Y = (A·B)'</span>
                  <span class="text-[10px] text-purple-300">Universal</span>
                </div>
                <div class="p-3 rounded-xl bg-slate-950 border border-purple-500/30">
                  <b class="text-purple-400 block text-sm">NOR</b>
                  <span class="text-[11px] text-slate-400 block mt-1">Y = (A+B)'</span>
                  <span class="text-[10px] text-purple-300">Universal</span>
                </div>
                <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <b class="text-pink-400 block text-sm">XOR</b>
                  <span class="text-[11px] text-slate-400 block mt-1">Y = A ⊕ B</span>
                  <span class="text-[10px] text-slate-500">Eksklusif OR</span>
                </div>
                <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <b class="text-pink-400 block text-sm">XNOR</b>
                  <span class="text-[11px] text-slate-400 block mt-1">Y = (A⊕B)'</span>
                  <span class="text-[10px] text-slate-500">Ekuivalensi</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Panel Pilihan Fitur & Laboratorium Bab 3 -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-200 flex items-center gap-2">
                <span>⚡</span> Laboratorium & Fitur Interaktif Pertemuan 03
              </h3>
              <span class="text-[11px] text-slate-400">Pilih modul laboratorium yang ingin Anda gunakan:</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Card Fitur 1 -->
              <div onclick="switchBabTab(3, 'fitur1')" class="p-5 rounded-2xl bg-slate-900/90 border border-pink-500/40 hover:border-pink-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] cursor-pointer group flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-xl shadow">✂️</span>
                    <span class="text-[10px] font-mono-code text-pink-400 bg-pink-950/80 px-2 py-0.5 rounded border border-pink-800">Fitur 1</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-base group-hover:text-pink-300 transition">Kalkulator Boolean (SOP / POS)</h4>
                    <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Penyederhanaan persamaan aljabar Boolean otomatis dalam bentuk SOP atau POS lengkap dengan visualisasi skematik rangkaian gerbang logika.
                    </p>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-pink-400 font-semibold">
                  <span>Buka Fitur Ini</span>
                  <span class="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>

              <!-- Card Fitur 2 -->
              <div onclick="switchBabTab(3, 'fitur2')" class="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,245,255,0.25)] cursor-pointer group flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-xl shadow">📋</span>
                    <span class="text-[10px] font-mono-code text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">Fitur 2</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-base group-hover:text-cyan-300 transition">Tabel Kebenaran & Generator</h4>
                    <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Tabel kebenaran interaktif 2, 3, dan 4 variabel. Cukup klik baris bernilai 1 untuk menghasilkan persamaan kanonik minterm & gambar sirkuit logika.
                    </p>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-cyan-400 font-semibold">
                  <span>Buka Fitur Ini</span>
                  <span class="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>

              <!-- Card Fitur 3 -->
              <div onclick="switchBabTab(3, 'fitur3')" class="p-5 rounded-2xl bg-slate-900/90 border border-purple-500/40 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] cursor-pointer group flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-xl shadow">⚡</span>
                    <span class="text-[10px] font-mono-code text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">Fitur 3</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-base group-hover:text-purple-300 transition">Simulator Proteus Virtual</h4>
                    <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Simulasikan gerbang logika AND, OR, NOT, NAND, NOR, XOR, XNOR dengan sakelar interaktif dan alur kabel neon berpendar seperti software Proteus.
                    </p>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-purple-400 font-semibold">
                  <span>Buka Fitur Ini</span>
                  <span class="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Banner Google Drive Bab 3 -->
          <div class="holo-card p-5 sm:p-6 rounded-2xl border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                📁
              </div>
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-emerald-400 mb-0.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Dokumen & Modul Kuliah Pertemuan 03
                </div>
                <h4 class="font-bold text-white text-base">Unduh Materi Lengkap Bab 3 di Google Drive</h4>
                <p class="text-xs text-slate-300">Akses slide aljabar Boolean, hukum logika De Morgan, dan simulasi proteus gerbang.</p>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-emerald-200 hover:text-white flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:scale-105 transition">
              <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
              <span>Buka Materi di Google Drive ↗</span>
            </a>
          </div>

          <!-- Tombol Kuis Mingguan (20 Soal) -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 class="font-bold text-white text-base">Uji Pemahaman: Kuis Pekan 3 (20 Soal)</h4>
              <p class="text-xs text-slate-400">Uji kemampuan aljabar Boolean, hukum De Morgan, gerbang logika, dan cetak sertifikat resmi.</p>
            </div>
            <button onclick="launchQuiz(3)" class="holo-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white whitespace-nowrap">
              Akses Kuis Pekan 3 (20 Soal)
            </button>
          </div>
        </div>

        <!-- ================= FITUR 1 SECTION ================= -->
        <div id="bab3_sec_fitur1" data-bab="3" class="hidden space-y-4">
          <div class="flex items-center justify-between">
            <button onclick="switchBabTab(3, 'beranda')" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 hover:border-pink-500 transition">
              <span>← Kembali ke Beranda Materi</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="switchBabTab(3, 'fitur2')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                Ke Fitur 2 ➔
              </button>
              <button onclick="switchBabTab(3, 'fitur3')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                Ke Fitur 3 ➔
              </button>
            </div>
          </div>

          <!-- FITUR 1: KALKULATOR PENYEDERHANAAN PERSAMAAN BOOLEAN (SOP / POS) -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-pink-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-pink-400 bg-pink-950/60 px-2 py-0.5 rounded border border-pink-800 mb-1">
                  <span>Fitur 1</span> • Aljabar Boolean
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-pink-400 text-xl">✂️</span> Kalkulator Penyederhanaan Persamaan Boolean (SOP / POS) + Gambar Gerbang
                </h3>
                <p class="text-xs text-slate-400">Pilih format SOP atau POS, masukkan persamaan aljabar Boolean, dan amati hasil penyederhanaan serta gambar skematik gerbang logika.</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              
              <!-- Pilihan SOP atau POS -->
              <div class="sm:col-span-3 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Bentuk Penyederhanaan:</label>
                <select id="b3_mode" onchange="runBab3Simplify()" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-pink-400 font-mono-code">
                  <option value="SOP">Sum of Products (SOP / AND-OR)</option>
                  <option value="POS">Product of Sums (POS / OR-AND)</option>
                </select>
              </div>

              <!-- Input Persamaan Boolean -->
              <div class="sm:col-span-6 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Masukkan Persamaan Boolean (Gunakan A, B, C, D dan tanda petik ' untuk NOT):</label>
                <input type="text" id="b3_expr" value="A'B'C + A'BC + AB'C + ABC" oninput="runBab3Simplify()" placeholder="Contoh: A'B + AB' atau A'B'C + A'BC + ABC" class="w-full bg-slate-950 border border-pink-500/40 rounded-xl p-2.5 text-sm text-pink-300 font-mono-code focus:outline-none focus:border-pink-400 font-bold" />
              </div>

              <!-- Contoh Preset Cepat -->
              <div class="sm:col-span-3 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Contoh Ekspresi:</label>
                <select id="b3_preset" onchange="applyBab3Preset()" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-slate-300 font-mono-code">
                  <option value="">-- Pilih Contoh Soal --</option>
                  <option value="A'B + AB'">XOR: A'B + AB'</option>
                  <option value="A'B'C + A'BC + AB'C + ABC">Penyederhanaan: A'B'C + A'BC + AB'C + ABC</option>
                  <option value="AB + A'(B+C)">Distributif: AB + A'(B+C)</option>
                  <option value="A'B' + AB' + AB">Multiple: A'B' + AB' + AB</option>
                </select>
              </div>

            </div>

            <!-- Hasil Penyederhanaan Boolean -->
            <div id="b3_simpl_output" class="bg-slate-950/80 p-4 rounded-xl border border-pink-500/20 font-mono-code space-y-2">
            </div>

            <!-- Rangkaian Gerbang Logika Hasil Persamaan Sederhana (SVG) -->
            <div class="space-y-2 pt-2 border-t border-slate-800">
              <span class="text-xs font-bold text-slate-300 block">Gambar Rangkaian Gerbang Logika dari Persamaan Sederhana:</span>
              <div id="b3_schematic_container" class="p-4 rounded-2xl bg-[#06080e] border border-cyan-500/30 flex items-center justify-center overflow-x-auto min-h-[160px]">
              </div>
            </div>
          </div>
        </div>

        <!-- ================= FITUR 2 SECTION ================= -->
        <div id="bab3_sec_fitur2" data-bab="3" class="hidden space-y-4">
          <div class="flex items-center justify-between">
            <button onclick="switchBabTab(3, 'beranda')" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 hover:border-cyan-500 transition">
              <span>← Kembali ke Beranda Materi</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="switchBabTab(3, 'fitur1')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                ← Ke Fitur 1
              </button>
              <button onclick="switchBabTab(3, 'fitur3')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                Ke Fitur 3 ➔
              </button>
            </div>
          </div>

          <!-- FITUR 2: TABEL KEBENARAN OTOMATIS & GENERATOR RANGKAIAN -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-cyan-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800 mb-1">
                  <span>Fitur 2</span> • Tabel Kebenaran Interaktif
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-cyan-400 text-xl">📋</span> Tabel Kebenaran Otomatis (Klik Kolom Nilai 1 ➔ Persamaan & Gambar Gerbang)
                </h3>
                <p class="text-xs text-slate-400">Pilih jumlah inputan (2, 3, atau 4). Tabel default berisi 0. Klik tombol 0/1 pada baris mana saja, maka persamaan kanonik, hasil sederhana, dan gambar gerbang akan langsung muncul!</p>
              </div>
            </div>

            <!-- Pemilih Jumlah Inputan -->
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center gap-2">
                <span class="text-xs text-slate-400 font-semibold">Pilih Jumlah Inputan Rangkaian:</span>
                <div class="flex gap-2">
                  <button id="tt_btn_2" onclick="setTruthTableInputs(2)" class="px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code transition bg-cyan-600 text-white shadow">2 Input (A, B)</button>
                  <button id="tt_btn_3" onclick="setTruthTableInputs(3)" class="px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code transition bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">3 Input (A, B, C)</button>
                  <button id="tt_btn_4" onclick="setTruthTableInputs(4)" class="px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code transition bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">4 Input (A, B, C, D)</button>
                </div>
              </div>

              <div class="flex items-center gap-2 text-xs font-mono-code">
                <button onclick="clearTruthTableOutputs(0)" class="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-white">Set Semua 0</button>
                <button onclick="clearTruthTableOutputs(1)" class="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-white">Set Semua 1</button>
                <button onclick="invertTruthTableOutputs()" class="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-white">Invert (NOT)</button>
              </div>
            </div>

            <!-- Tampilan Tabel Kebenaran Dinamis -->
            <div class="overflow-x-auto">
              <div id="truthTableContainer" class="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
              </div>
            </div>

            <!-- Persamaan yang Dihasilkan di Bawah Tabel -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 font-mono-code space-y-1.5">
                <span class="text-xs text-cyan-400 font-bold block">1. Persamaan Minterm Kanonik:</span>
                <div id="tt_canonical_sop" class="text-sm font-bold text-white break-words">Y = 0</div>
                <div id="tt_minterm_list" class="text-xs text-slate-400">Σm(-)</div>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/80 border border-purple-500/20 font-mono-code space-y-1.5">
                <span class="text-xs text-purple-400 font-bold block">2. Persamaan yang Telah Disederhanakan:</span>
                <div id="tt_simplified_res" class="text-base font-extrabold text-emerald-300 break-words">Y = 0</div>
                <span class="text-[11px] text-slate-400 block">Dihitung otomatis menggunakan Algoritma Minimasi Logika</span>
              </div>
            </div>

            <!-- Gambar Rangkaian Gerbang Logika Hasil Sederhana -->
            <div class="space-y-2 pt-2 border-t border-slate-800">
              <span class="text-xs font-bold text-slate-300 block">Gambar Rangkaian Gerbang Logika dari Persamaan yang Telah Disederhanakan:</span>
              <div id="tt_schematic_container" class="p-4 rounded-2xl bg-[#06080e] border border-cyan-500/30 flex items-center justify-center overflow-x-auto min-h-[160px]">
              </div>
            </div>
          </div>
        </div>

        <!-- ================= FITUR 3 SECTION ================= -->
        <div id="bab3_sec_fitur3" data-bab="3" class="hidden space-y-4">
          <div class="flex items-center justify-between">
            <button onclick="switchBabTab(3, 'beranda')" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 hover:border-purple-500 transition">
              <span>← Kembali ke Beranda Materi</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="switchBabTab(3, 'fitur1')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                ← Ke Fitur 1
              </button>
              <button onclick="switchBabTab(3, 'fitur2')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                ← Ke Fitur 2
              </button>
            </div>
          </div>

          <!-- FITUR 3: SIMULATOR GERBANG LOGIKA INTERAKTIF (PRINSIP PROTEUS) -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-purple-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800 mb-1">
                  <span>Fitur 3</span> • Simulator Proteus Virtual
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-purple-400 text-xl">⚡</span> Simulator Gerbang Logika Interaktif (Alur Sinyal Berpendar Seperti Proteus)
                </h3>
                <p class="text-xs text-slate-400">Bebas memilih gerbang logika yang ingin dirangkai. Switch input antara 0 dan 1, amati alur kabel yang berpendar neon menyala (1) dan padam (0) secara real-time!</p>
              </div>
            </div>

            <!-- Pemilih Komponen / Skematik Gerbang Proteus -->
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xs text-slate-400 font-semibold">Pilih Gerbang / Rangkaian:</span>
                <div class="flex flex-wrap gap-1.5 font-mono-code text-xs">
                  <button onclick="setProteusGate('AND')" id="pg_AND" class="px-3 py-1.5 rounded-lg bg-cyan-600 text-white font-bold shadow">AND</button>
                  <button onclick="setProteusGate('OR')" id="pg_OR" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">OR</button>
                  <button onclick="setProteusGate('NOT')" id="pg_NOT" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">NOT</button>
                  <button onclick="setProteusGate('NAND')" id="pg_NAND" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">NAND</button>
                  <button onclick="setProteusGate('NOR')" id="pg_NOR" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">NOR</button>
                  <button onclick="setProteusGate('XOR')" id="pg_XOR" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">XOR</button>
                  <button onclick="setProteusGate('XNOR')" id="pg_XNOR" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">XNOR</button>
                  <button onclick="setProteusGate('COMPOUND_SOP')" id="pg_COMPOUND_SOP" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-purple-300 hover:text-white">SOP: AB + CD</button>
                  <button onclick="setProteusGate('HALF_ADDER')" id="pg_HALF_ADDER" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-300 hover:text-white">Half Adder</button>
                </div>
              </div>
            </div>

            <!-- Panel Sakelar Toggle Input (Switch 0 / 1) -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div id="sw_box_A" class="p-3 rounded-xl border transition flex items-center justify-between cursor-pointer switch-btn-inactive" onclick="toggleProteusSwitch('A')">
                <div>
                  <span class="text-[10px] text-slate-400 block font-mono-code font-bold">SAKELAR A:</span>
                  <span id="sw_txt_A" class="text-sm font-mono-code font-black text-slate-300">LOW (0)</span>
                </div>
                <div id="sw_led_A" class="w-6 h-6 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center font-bold text-xs text-slate-500 font-mono-code">0</div>
              </div>

              <div id="sw_box_B" class="p-3 rounded-xl border transition flex items-center justify-between cursor-pointer switch-btn-inactive" onclick="toggleProteusSwitch('B')">
                <div>
                  <span class="text-[10px] text-slate-400 block font-mono-code font-bold">SAKELAR B:</span>
                  <span id="sw_txt_B" class="text-sm font-mono-code font-black text-slate-300">LOW (0)</span>
                </div>
                <div id="sw_led_B" class="w-6 h-6 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center font-bold text-xs text-slate-500 font-mono-code">0</div>
              </div>

              <div id="sw_box_C" class="p-3 rounded-xl border transition flex items-center justify-between cursor-pointer switch-btn-inactive" onclick="toggleProteusSwitch('C')">
                <div>
                  <span class="text-[10px] text-slate-400 block font-mono-code font-bold">SAKELAR C:</span>
                  <span id="sw_txt_C" class="text-sm font-mono-code font-black text-slate-300">LOW (0)</span>
                </div>
                <div id="sw_led_C" class="w-6 h-6 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center font-bold text-xs text-slate-500 font-mono-code">0</div>
              </div>

              <div id="sw_box_D" class="p-3 rounded-xl border transition flex items-center justify-between cursor-pointer switch-btn-inactive" onclick="toggleProteusSwitch('D')">
                <div>
                  <span class="text-[10px] text-slate-400 block font-mono-code font-bold">SAKELAR D:</span>
                  <span id="sw_txt_D" class="text-sm font-mono-code font-black text-slate-300">LOW (0)</span>
                </div>
                <div id="sw_led_D" class="w-6 h-6 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center font-bold text-xs text-slate-500 font-mono-code">0</div>
              </div>
            </div>

            <!-- Kanvas Skematik Proteus Interaktif dengan Alur Jalur Logika -->
            <div class="p-4 rounded-2xl bg-[#06080e] border border-cyan-500/30 overflow-x-auto flex justify-center">
              <div id="proteusCanvasContainer">
              </div>
            </div>

            <!-- Panel Status Probe Logika Proteus -->
            <div id="proteusProbeStatus" class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 font-mono-code flex flex-wrap items-center justify-between gap-3">
            </div>
          </div>
        </div>
      `;

            runBab3Simplify();
            buildInteractiveTruthTable();
            updateProteusCircuit();
        }

        /* State untuk Fitur 2: Tabel Kebenaran Interaktif */
        let ttVarCount = 2; // 2, 3, atau 4
        let ttOutputs = {}; // { 0: 0, 1: 0, ... }

        function setTruthTableInputs(num) {
            ttVarCount = num;
            [2, 3, 4].forEach(n => {
                const btn = document.getElementById('tt_btn_' + n);
                if (btn) {
                    if (n === num) {
                        btn.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code transition bg-cyan-600 text-white shadow";
                    } else {
                        btn.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code transition bg-slate-900 border border-slate-700 text-slate-300 hover:text-white";
                    }
                }
            });
            clearTruthTableOutputs(0);
        }

        function clearTruthTableOutputs(val = 0) {
            const maxRows = 1 << ttVarCount;
            ttOutputs = {};
            for (let i = 0; i < maxRows; i++) {
                ttOutputs[i] = val;
            }
            buildInteractiveTruthTable();
        }

        function invertTruthTableOutputs() {
            const maxRows = 1 << ttVarCount;
            for (let i = 0; i < maxRows; i++) {
                ttOutputs[i] = ttOutputs[i] ? 0 : 1;
            }
            buildInteractiveTruthTable();
        }

        function toggleTruthTableRow(rowIdx) {
            ttOutputs[rowIdx] = ttOutputs[rowIdx] ? 0 : 1;
            buildInteractiveTruthTable();
        }

        function buildInteractiveTruthTable() {
            const container = document.getElementById('truthTableContainer');
            if (!container) return;

            const varNames = ['A', 'B', 'C', 'D'].slice(0, ttVarCount);
            const rowCount = 1 << ttVarCount;

            let html = `
        <table class="w-full text-center font-mono-code text-xs border-collapse">
          <thead>
            <tr class="border-b border-slate-800 text-slate-400 bg-slate-900/50">
              <th class="p-2 text-slate-500">Baris</th>
              ${varNames.map(v => `<th class="p-2 text-cyan-300 font-bold">${v}</th>`).join('')}
              <th class="p-2 text-pink-400 font-bold">Output Y (Klik untuk Ubah)</th>
              <th class="p-2 text-slate-500 hidden sm:table-cell">Minterm</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
      `;

            for (let i = 0; i < rowCount; i++) {
                const binStr = i.toString(2).padStart(ttVarCount, '0');
                const outVal = ttOutputs[i] !== undefined ? ttOutputs[i] : 0;
                const isOne = (outVal === 1);

                html += `
          <tr class="hover:bg-slate-900/50 transition">
            <td class="p-2 text-slate-500">m${i}</td>
            ${binStr.split('').map(b => `<td class="p-2 ${b === '1' ? 'text-white font-bold' : 'text-slate-500'}">${b}</td>`).join('')}
            <td class="p-2">
              <button onclick="toggleTruthTableRow(${i})" class="px-4 py-1 rounded-lg font-bold text-xs transition ${isOne ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_#00f5ff]' : 'bg-slate-900 border border-slate-700 text-slate-400 hover:border-cyan-400'}">
                ${outVal}
              </button>
            </td>
            <td class="p-2 text-slate-500 hidden sm:table-cell">m${i}</td>
          </tr>
        `;
            }

            html += `</tbody></table>`;
            container.innerHTML = html;

            // Hitung dan perbarui persamaan kanonik & sederhana
            updateTruthTableResults();
        }

        function updateTruthTableResults() {
            const varNames = ['A', 'B', 'C', 'D'].slice(0, ttVarCount);
            const rowCount = 1 << ttVarCount;
            const ones = [];
            const zeros = [];

            for (let i = 0; i < rowCount; i++) {
                if (ttOutputs[i] === 1) ones.push(i);
                else zeros.push(i);
            }

            const canonElem = document.getElementById('tt_canonical_sop');
            const minElem = document.getElementById('tt_minterm_list');
            const simplElem = document.getElementById('tt_simplified_res');
            const schemElem = document.getElementById('tt_schematic_container');

            minElem.innerText = `Σm(${ones.join(', ') || '-'}) | ΠM(${zeros.join(', ') || '-'})`;

            if (ones.length === 0) {
                canonElem.innerText = "Y = 0";
                simplElem.innerText = "Y = 0 (Konstan LOW)";
                if (schemElem) schemElem.innerHTML = renderSimpleLogicSVG("0", varNames);
                return;
            }

            if (ones.length === rowCount) {
                canonElem.innerText = "Y = 1";
                simplElem.innerText = "Y = 1 (Konstan HIGH)";
                if (schemElem) schemElem.innerHTML = renderSimpleLogicSVG("1", varNames);
                return;
            }

            // Persamaan Kanonik SOP
            const canonicalTerms = ones.map(m => {
                const bin = m.toString(2).padStart(ttVarCount, '0');
                let term = "";
                for (let j = 0; j < ttVarCount; j++) {
                    term += bin[j] === '1' ? varNames[j] : varNames[j] + "'";
                }
                return term;
            });
            canonElem.innerText = "Y = " + canonicalTerms.join(' + ');

            // Persamaan Sederhana via QMC Core
            const qmcRes = solveQuineMcCluskeyCore(ones, [], ttVarCount, varNames);
            const simpTerms = qmcRes.chosen.map(pi => {
                let t = "";
                for (let j = 0; j < ttVarCount; j++) {
                    if (pi.mask[j] === '1') t += varNames[j];
                    else if (pi.mask[j] === '0') t += varNames[j] + "'";
                }
                return t || "1";
            });

            const finalSimplified = simpTerms.join(' + ') || "0";
            simplElem.innerText = "Y = " + finalSimplified;

            // Gambar Skematik Rangkaian Gerbang Logika Hasil Sederhana
            if (schemElem) {
                schemElem.innerHTML = renderDynamicCircuitSVG(simpTerms, varNames);
            }
        }

        /* State untuk Fitur 3: Simulator Proteus */
        let proteusGateType = 'AND';
        let proteusInputs = { A: 0, B: 0, C: 0, D: 0 };

        function setProteusGate(type) {
            proteusGateType = type;
            ['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR', 'COMPOUND_SOP', 'HALF_ADDER'].forEach(t => {
                const b = document.getElementById('pg_' + t);
                if (b) {
                    if (t === type) {
                        b.className = "px-3 py-1.5 rounded-lg bg-cyan-600 text-white font-bold shadow";
                    } else {
                        b.className = "px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white";
                    }
                }
            });
            updateProteusCircuit();
        }

        function toggleProteusSwitch(pin) {
            proteusInputs[pin] = proteusInputs[pin] ? 0 : 1;
            const box = document.getElementById('sw_box_' + pin);
            const txt = document.getElementById('sw_txt_' + pin);
            const led = document.getElementById('sw_led_' + pin);
            const val = proteusInputs[pin];

            if (val === 1) {
                box.className = "p-3 rounded-xl border transition flex items-center justify-between cursor-pointer switch-btn-active";
                txt.innerText = "HIGH (1)";
                txt.className = "text-sm font-mono-code font-black text-white";
                led.innerText = "1";
                led.className = "w-6 h-6 rounded-full border border-emerald-400 bg-emerald-400 text-slate-950 font-black text-xs font-mono-code shadow-[0_0_10px_#34d399] flex items-center justify-center";
            } else {
                box.className = "p-3 rounded-xl border transition flex items-center justify-between cursor-pointer switch-btn-inactive";
                txt.innerText = "LOW (0)";
                txt.className = "text-sm font-mono-code font-black text-slate-400";
                led.innerText = "0";
                led.className = "w-6 h-6 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center font-bold text-xs text-slate-500 font-mono-code";
            }

            updateProteusCircuit();
        }

        function updateProteusCircuit() {
            const container = document.getElementById('proteusCanvasContainer');
            const statusBox = document.getElementById('proteusProbeStatus');
            if (!container || !statusBox) return;

            const A = proteusInputs.A;
            const B = proteusInputs.B;
            const C = proteusInputs.C;
            const D = proteusInputs.D;

            let Y = 0;
            let circuitSvg = "";
            let statusDesc = "";

            if (proteusGateType === 'COMPOUND_SOP') {
                // Compound SOP: Y = (A · B) + (C · D)
                const g1 = (A && B) ? 1 : 0;
                const g2 = (C && D) ? 1 : 0;
                Y = (g1 || g2) ? 1 : 0;

                circuitSvg = `
          <svg width="680" height="230" viewBox="0 0 680 230" class="select-none overflow-visible">
            <!-- Label Switch Input -->
            <text x="25" y="45" fill="${A ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">Input A [${A}]</text>
            <text x="25" y="85" fill="${B ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">Input B [${B}]</text>
            <text x="25" y="145" fill="${C ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">Input C [${C}]</text>
            <text x="25" y="185" fill="${D ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">Input D [${D}]</text>

            <!-- Kabel Input ke Gate 1 & 2 -->
            <line x1="110" y1="40" x2="190" y2="40" class="${A ? 'wire-high' : 'wire-low'}" />
            <line x1="110" y1="80" x2="190" y2="80" class="${B ? 'wire-high' : 'wire-low'}" />
            <line x1="110" y1="140" x2="190" y2="140" class="${C ? 'wire-high' : 'wire-low'}" />
            <line x1="110" y1="180" x2="190" y2="180" class="${D ? 'wire-high' : 'wire-low'}" />

            <!-- Gate 1: AND -->
            <g transform="translate(190, 30)">
              <path d="M0,0 L30,0 A30,30 0 0,1 30,60 L0,60 Z" fill="#0b1329" stroke="#00f5ff" stroke-width="2.5" />
              <text x="18" y="35" fill="#00f5ff" font-family="JetBrains Mono" font-size="11" font-weight="bold">AND</text>
            </g>

            <!-- Gate 2: AND -->
            <g transform="translate(190, 130)">
              <path d="M0,0 L30,0 A30,30 0 0,1 30,60 L0,60 Z" fill="#0b1329" stroke="#00f5ff" stroke-width="2.5" />
              <text x="18" y="35" fill="#00f5ff" font-family="JetBrains Mono" font-size="11" font-weight="bold">AND</text>
            </g>

            <!-- Kabel Intermediat ke OR -->
            <line x1="250" y1="60" x2="330" y2="60" class="${g1 ? 'wire-high' : 'wire-low'}" />
            <line x1="330" y1="60" x2="330" y2="95" class="${g1 ? 'wire-high' : 'wire-low'}" />
            <line x1="330" y1="95" x2="390" y2="95" class="${g1 ? 'wire-high' : 'wire-low'}" />

            <line x1="250" y1="160" x2="330" y2="160" class="${g2 ? 'wire-high' : 'wire-low'}" />
            <line x1="330" y1="160" x2="330" y2="125" class="${g2 ? 'wire-high' : 'wire-low'}" />
            <line x1="330" y1="125" x2="390" y2="125" class="${g2 ? 'wire-high' : 'wire-low'}" />

            <!-- Probes Intermediat -->
            <rect x="260" y="45" width="45" height="18" rx="4" fill="${g1 ? '#064e3b' : '#0f172a'}" stroke="${g1 ? '#10b981' : '#334155'}" />
            <text x="268" y="58" fill="${g1 ? '#34d399' : '#64748b'}" font-family="JetBrains Mono" font-size="10">P1=${g1}</text>

            <rect x="260" y="145" width="45" height="18" rx="4" fill="${g2 ? '#064e3b' : '#0f172a'}" stroke="${g2 ? '#10b981' : '#334155'}" />
            <text x="268" y="158" fill="${g2 ? '#34d399' : '#64748b'}" font-family="JetBrains Mono" font-size="10">P2=${g2}</text>

            <!-- Gate 3: OR -->
            <g transform="translate(390, 80)">
              <path d="M0,0 Q20,15 20,30 Q20,45 0,60 Q35,60 55,30 Q35,0 0,0 Z" fill="#0b1329" stroke="#a855f7" stroke-width="2.5" />
              <text x="20" y="35" fill="#a855f7" font-family="JetBrains Mono" font-size="11" font-weight="bold">OR</text>
            </g>

            <!-- Output Wire & LED -->
            <line x1="445" y1="110" x2="530" y2="110" class="${Y ? 'wire-high' : 'wire-low'}" />

            <!-- Output LED Probe -->
            <g transform="translate(540, 85)">
              <circle cx="25" cy="25" r="22" class="${Y ? 'led-bulb-on' : 'led-bulb-off'}" stroke-width="2" />
              <text x="21" y="30" fill="${Y ? '#052e16' : '#94a3b8'}" font-family="JetBrains Mono" font-size="14" font-weight="black">${Y}</text>
              <text x="56" y="24" fill="${Y ? '#4ade80' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">${Y ? 'LED ON' : 'LED OFF'}</text>
              <text x="56" y="38" fill="#94a3b8" font-family="JetBrains Mono" font-size="10">${Y ? '5.0V (HIGH)' : '0.0V (LOW)'}</text>
            </g>
          </svg>
        `;
                statusDesc = `Persamaan: Y = (A·B) + (C·D) = (${A}·${B}) + (${C}·${D}) = ${g1} + ${g2} = ${Y}`;
            } else if (proteusGateType === 'HALF_ADDER') {
                const Sum = (A !== B) ? 1 : 0;
                const Carry = (A && B) ? 1 : 0;
                Y = Sum;

                circuitSvg = `
          <svg width="680" height="230" viewBox="0 0 680 230" class="select-none overflow-visible">
            <text x="25" y="60" fill="${A ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">Input A [${A}]</text>
            <text x="25" y="150" fill="${B ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">Input B [${B}]</text>

            <line x1="110" y1="55" x2="220" y2="55" class="${A ? 'wire-high' : 'wire-low'}" />
            <line x1="150" y1="55" x2="150" y2="135" class="${A ? 'wire-high' : 'wire-low'}" />
            <line x1="150" y1="135" x2="220" y2="135" class="${A ? 'wire-high' : 'wire-low'}" />

            <line x1="110" y1="145" x2="180" y2="145" class="${B ? 'wire-high' : 'wire-low'}" />
            <line x1="180" y1="145" x2="180" y2="85" class="${B ? 'wire-high' : 'wire-low'}" />
            <line x1="180" y1="85" x2="220" y2="85" class="${B ? 'wire-high' : 'wire-low'}" />
            <line x1="180" y1="145" x2="220" y2="175" class="${B ? 'wire-high' : 'wire-low'}" />

            <!-- XOR Gate (Sum) -->
            <g transform="translate(220, 40)">
              <path d="M-6,0 Q14,15 14,30 Q14,45 -6,60" fill="none" stroke="#ec4899" stroke-width="2.5" />
              <path d="M0,0 Q20,15 20,30 Q20,45 0,60 Q35,60 55,30 Q35,0 0,0 Z" fill="#0b1329" stroke="#ec4899" stroke-width="2.5" />
              <text x="20" y="35" fill="#ec4899" font-family="JetBrains Mono" font-size="10" font-weight="bold">XOR</text>
            </g>

            <!-- AND Gate (Carry) -->
            <g transform="translate(220, 125)">
              <path d="M0,0 L30,0 A30,30 0 0,1 30,60 L0,60 Z" fill="#0b1329" stroke="#00f5ff" stroke-width="2.5" />
              <text x="18" y="35" fill="#00f5ff" font-family="JetBrains Mono" font-size="10" font-weight="bold">AND</text>
            </g>

            <!-- Output Sum Wire -->
            <line x1="275" y1="70" x2="420" y2="70" class="${Sum ? 'wire-high' : 'wire-low'}" />
            <text x="430" y="65" fill="${Sum ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="11" font-weight="bold">SUM = ${Sum}</text>
            <circle cx="510" cy="70" r="16" class="${Sum ? 'led-bulb-on' : 'led-bulb-off'}" stroke-width="2" />

            <!-- Output Carry Wire -->
            <line x1="280" y1="155" x2="420" y2="155" class="${Carry ? 'wire-high' : 'wire-low'}" />
            <text x="430" y="150" fill="${Carry ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="11" font-weight="bold">CARRY = ${Carry}</text>
            <circle cx="510" cy="155" r="16" class="${Carry ? 'led-bulb-on' : 'led-bulb-off'}" stroke-width="2" />
          </svg>
        `;
                statusDesc = `Half Adder: SUM = A ⊕ B = ${Sum} | CARRY = A · B = ${Carry}`;
            } else {
                // Single Gate Proteus
                if (proteusGateType === 'AND') Y = (A && B) ? 1 : 0;
                else if (proteusGateType === 'OR') Y = (A || B) ? 1 : 0;
                else if (proteusGateType === 'NOT') Y = A ? 0 : 1;
                else if (proteusGateType === 'NAND') Y = (A && B) ? 0 : 1;
                else if (proteusGateType === 'NOR') Y = (A || B) ? 0 : 1;
                else if (proteusGateType === 'XOR') Y = (A !== B) ? 1 : 0;
                else if (proteusGateType === 'XNOR') Y = (A === B) ? 1 : 0;

                const isNot = (proteusGateType === 'NOT');

                circuitSvg = `
          <svg width="600" height="180" viewBox="0 0 600 180" class="select-none overflow-visible">
            <text x="25" y="65" fill="${A ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">Input A [${A}]</text>
            ${!isNot ? `<text x="25" y="125" fill="${B ? '#00ff88' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">Input B [${B}]</text>` : ''}

            <!-- Wires -->
            <line x1="110" y1="60" x2="200" y2="60" class="${A ? 'wire-high' : 'wire-low'}" />
            ${!isNot ? `<line x1="110" y1="120" x2="200" y2="120" class="${B ? 'wire-high' : 'wire-low'}" />` : ''}

            <!-- Gate Symbol -->
            <g transform="translate(200, 45)">
              ${renderGatePath(proteusGateType)}
            </g>

            <!-- Output Wire & LED Probe -->
            <line x1="270" y1="90" x2="380" y2="90" class="${Y ? 'wire-high' : 'wire-low'}" />

            <g transform="translate(390, 65)">
              <circle cx="25" cy="25" r="22" class="${Y ? 'led-bulb-on' : 'led-bulb-off'}" stroke-width="2" />
              <text x="21" y="30" fill="${Y ? '#052e16' : '#94a3b8'}" font-family="JetBrains Mono" font-size="14" font-weight="black">${Y}</text>
              <text x="56" y="24" fill="${Y ? '#4ade80' : '#64748b'}" font-family="JetBrains Mono" font-size="12" font-weight="bold">${Y ? 'LED ON' : 'LED OFF'}</text>
              <text x="56" y="38" fill="#94a3b8" font-family="JetBrains Mono" font-size="10">${Y ? '5.0V (HIGH)' : '0.0V (LOW)'}</text>
            </g>
          </svg>
        `;
                statusDesc = `Gerbang ${proteusGateType}: Output Y = ${Y} (${Y ? 'Tegangan HIGH 5.0V' : 'Tegangan LOW 0.0V'})`;
            }

            container.innerHTML = circuitSvg;
            statusBox.innerHTML = `
        <div><strong>Status Logika Proteus:</strong> ${statusDesc}</div>
        <div class="text-cyan-400">Jalur sinyal aktif (1) menyala berpendar hijau neon</div>
      `;
        }

        function renderGatePath(type) {
            if (type === 'AND') {
                return `<path d="M0,0 L30,0 A30,30 0 0,1 30,60 L0,60 Z" fill="#0b1329" stroke="#00f5ff" stroke-width="2.5" /><text x="18" y="35" fill="#00f5ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">AND</text>`;
            }
            if (type === 'OR') {
                return `<path d="M0,0 Q20,15 20,30 Q20,45 0,60 Q35,60 55,30 Q35,0 0,0 Z" fill="#0b1329" stroke="#a855f7" stroke-width="2.5" /><text x="20" y="35" fill="#a855f7" font-family="JetBrains Mono" font-size="12" font-weight="bold">OR</text>`;
            }
            if (type === 'NOT') {
                return `<path d="M0,10 L45,30 L0,50 Z" fill="#0b1329" stroke="#ec4899" stroke-width="2.5" /><circle cx="49" cy="30" r="4" fill="#0b1329" stroke="#ec4899" stroke-width="2" /><text x="12" y="34" fill="#ec4899" font-family="JetBrains Mono" font-size="11" font-weight="bold">NOT</text>`;
            }
            if (type === 'NAND') {
                return `<path d="M0,0 L30,0 A30,30 0 0,1 30,60 L0,60 Z" fill="#0b1329" stroke="#00f5ff" stroke-width="2.5" /><circle cx="64" cy="30" r="4" fill="#0b1329" stroke="#00f5ff" stroke-width="2" /><text x="14" y="35" fill="#00f5ff" font-family="JetBrains Mono" font-size="11" font-weight="bold">NAND</text>`;
            }
            if (type === 'NOR') {
                return `<path d="M0,0 Q20,15 20,30 Q20,45 0,60 Q35,60 55,30 Q35,0 0,0 Z" fill="#0b1329" stroke="#a855f7" stroke-width="2.5" /><circle cx="59" cy="30" r="4" fill="#0b1329" stroke="#a855f7" stroke-width="2" /><text x="17" y="35" fill="#a855f7" font-family="JetBrains Mono" font-size="11" font-weight="bold">NOR</text>`;
            }
            if (type === 'XOR') {
                return `<path d="M-6,0 Q14,15 14,30 Q14,45 -6,60" fill="none" stroke="#ec4899" stroke-width="2.5" /><path d="M0,0 Q20,15 20,30 Q20,45 0,60 Q35,60 55,30 Q35,0 0,0 Z" fill="#0b1329" stroke="#ec4899" stroke-width="2.5" /><text x="20" y="35" fill="#ec4899" font-family="JetBrains Mono" font-size="11" font-weight="bold">XOR</text>`;
            }
            if (type === 'XNOR') {
                return `<path d="M-6,0 Q14,15 14,30 Q14,45 -6,60" fill="none" stroke="#ec4899" stroke-width="2.5" /><path d="M0,0 Q20,15 20,30 Q20,45 0,60 Q35,60 55,30 Q35,0 0,0 Z" fill="#0b1329" stroke="#ec4899" stroke-width="2.5" /><circle cx="59" cy="30" r="4" fill="#0b1329" stroke="#ec4899" stroke-width="2" /><text x="16" y="35" fill="#ec4899" font-family="JetBrains Mono" font-size="10" font-weight="bold">XNOR</text>`;
            }
            return "";
        }

        /* Logika Fitur 1: Penyederhanaan Aljabar Boolean */
        function applyBab3Preset() {
            const sel = document.getElementById('b3_preset').value;
            if (sel) {
                document.getElementById('b3_expr').value = sel;
                runBab3Simplify();
            }
        }

        function runBab3Simplify() {
            const mode = document.getElementById('b3_mode').value;
            const rawExpr = document.getElementById('b3_expr').value.trim();
            const outDiv = document.getElementById('b3_simpl_output');
            const schemDiv = document.getElementById('b3_schematic_container');
            if (!outDiv) return;

            if (!rawExpr) {
                outDiv.innerHTML = '<span class="text-slate-500">Masukkan ekspresi Boolean...</span>';
                if (schemDiv) schemDiv.innerHTML = "";
                return;
            }

            // Deteksi variabel aktif (A, B, C, D)
            const vars = [];
            ['A', 'B', 'C', 'D'].forEach(v => {
                if (new RegExp('\\b' + v + '\\b|' + v + "'").test(rawExpr)) vars.push(v);
            });
            if (vars.length < 2) vars.push('A', 'B');

            const varCount = Math.min(Math.max(vars.length, 2), 4);
            const activeVars = ['A', 'B', 'C', 'D'].slice(0, varCount);
            const rowCount = 1 << varCount;

            // Evaluasi tabel kebenaran dari ekspresi
            const ones = [];
            const zeros = [];

            for (let i = 0; i < rowCount; i++) {
                const bin = i.toString(2).padStart(varCount, '0');
                const env = {};
                for (let j = 0; j < varCount; j++) {
                    env[activeVars[j]] = bin[j] === '1';
                }

                const isTrue = evalBooleanExpression(rawExpr, env);
                if (isTrue) ones.push(i);
                else zeros.push(i);
            }

            // Penyederhanaan via QMC
            let resEquation = "";
            let chosenTerms = [];
            let lawExplanations = [];

            if (mode === 'SOP') {
                if (ones.length === 0) {
                    resEquation = "0";
                } else if (ones.length === rowCount) {
                    resEquation = "1";
                } else {
                    const qmc = solveQuineMcCluskeyCore(ones, [], varCount, activeVars);
                    chosenTerms = qmc.chosen.map(pi => {
                        let t = "";
                        for (let j = 0; j < varCount; j++) {
                            if (pi.mask[j] === '1') t += activeVars[j];
                            else if (pi.mask[j] === '0') t += activeVars[j] + "'";
                        }
                        return t || "1";
                    });
                    resEquation = chosenTerms.join(' + ') || "0";
                }
            } else {
                // POS mode
                if (zeros.length === 0) {
                    resEquation = "1";
                } else if (zeros.length === rowCount) {
                    resEquation = "0";
                } else {
                    const qmc = solveQuineMcCluskeyCore(zeros, [], varCount, activeVars);
                    chosenTerms = qmc.chosen.map(pi => {
                        let sumLiterals = [];
                        for (let j = 0; j < varCount; j++) {
                            if (pi.mask[j] === '0') sumLiterals.push(activeVars[j]);
                            else if (pi.mask[j] === '1') sumLiterals.push(activeVars[j] + "'");
                        }
                        return sumLiterals.length === 1 ? sumLiterals[0] : '(' + sumLiterals.join(' + ') + ')';
                    });
                    resEquation = chosenTerms.join(' · ') || "1";
                }
            }

            outDiv.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <span class="text-slate-400 text-xs">Persamaan Asli: <code class="text-pink-300 font-bold">${rawExpr}</code></span>
          <span class="text-[11px] font-mono-code px-2 py-0.5 rounded bg-pink-950 text-pink-300 border border-pink-800">${mode}</span>
        </div>
        <div class="flex items-center justify-between pt-1">
          <span class="text-slate-300 font-bold text-xs">Hasil Paling Sederhana:</span>
          <span class="text-xl font-black text-cyan-300 font-mono-code">Q = ${resEquation}</span>
        </div>
        <div class="text-[11px] text-slate-400 pt-1">
          <em>Hukum yang Digunakan:</em> Kombinasi Hukum Inversi (A + A' = 1), Idempoten (A + A = A), Absorpsi (A + AB = A), dan Teorema Distributif Aljabar Boolean.
        </div>
      `;

            if (schemDiv) {
                if (mode === 'SOP') {
                    schemDiv.innerHTML = renderDynamicCircuitSVG(chosenTerms, activeVars);
                } else {
                    schemDiv.innerHTML = renderDynamicCircuitPOS_SVG(chosenTerms, activeVars);
                }
            }
        }

        /* Evaluator String Boolean Sederhana */
        function evalBooleanExpression(expr, env) {
            try {
                let clean = expr.toUpperCase().replace(/\s+/g, '');
                // Replace variable + prime (e.g. A' -> (!A))
                ['A', 'B', 'C', 'D'].forEach(v => {
                    clean = clean.replace(new RegExp(v + "'", 'g'), '(!' + (env[v] ? 'true' : 'false') + ')');
                });
                ['A', 'B', 'C', 'D'].forEach(v => {
                    clean = clean.replace(new RegExp(v, 'g'), (env[v] ? 'true' : 'false'));
                });
                // Replace Boolean symbols to JS operators
                clean = clean.replace(/·|\*/g, '&&').replace(/\+/g, '||');
                // Handle juxtaposed variables (e.g. truefalse -> true && false)
                clean = clean.replace(/(true|false|\))(?=true|false|!|\()/g, '$1&&');
                return Boolean(Function('"use strict";return (' + clean + ')')());
            } catch (e) {
                return false;
            }
        }

        /* Dynamic SVG Logic Circuit Generators */
        function renderDynamicCircuitSVG(terms, vars) {
            if (!terms || terms.length === 0 || terms[0] === '0') {
                return renderSimpleLogicSVG("0", vars);
            }
            if (terms[0] === '1') {
                return renderSimpleLogicSVG("1", vars);
            }

            const termCount = terms.length;
            const svgHeight = Math.max(160, termCount * 55 + 50);

            let svg = `<svg width="580" height="${svgHeight}" viewBox="0 0 580 ${svgHeight}" class="select-none overflow-visible">`;

            // Draw input vertical bus rails
            const xA = 40, xB = 70, xC = 100;
            svg += `
        <text x="35" y="25" fill="#00f5ff" font-family="JetBrains Mono" font-size="11" font-weight="bold">A</text>
        <line x1="${xA}" y1="35" x2="${xA}" y2="${svgHeight - 20}" stroke="#00f5ff" stroke-width="1.5" opacity="0.6" />
        <text x="65" y="25" fill="#a855f7" font-family="JetBrains Mono" font-size="11" font-weight="bold">B</text>
        <line x1="${xB}" y1="35" x2="${xB}" y2="${svgHeight - 20}" stroke="#a855f7" stroke-width="1.5" opacity="0.6" />
      `;
            if (vars.length > 2) {
                svg += `
          <text x="95" y="25" fill="#ec4899" font-family="JetBrains Mono" font-size="11" font-weight="bold">C</text>
          <line x1="${xC}" y1="35" x2="${xC}" y2="${svgHeight - 20}" stroke="#ec4899" stroke-width="1.5" opacity="0.6" />
        `;
            }

            // AND gates for each product term
            const andOutputsY = [];
            terms.forEach((term, idx) => {
                const yGate = 50 + idx * 55;
                andOutputsY.push(yGate + 20);

                svg += `
          <g transform="translate(180, ${yGate})">
            <path d="M0,0 L25,0 A20,20 0 0,1 25,40 L0,40 Z" fill="#0b1329" stroke="#00f5ff" stroke-width="2" />
            <text x="12" y="24" fill="#00f5ff" font-family="JetBrains Mono" font-size="9" font-weight="bold">AND</text>
          </g>
          <line x1="120" y1="${yGate + 10}" x2="180" y2="${yGate + 10}" stroke="#64748b" stroke-width="1.5" />
          <line x1="120" y1="${yGate + 30}" x2="180" y2="${yGate + 30}" stroke="#64748b" stroke-width="1.5" />
          <text x="235" y="${yGate + 15}" fill="#94a3b8" font-family="JetBrains Mono" font-size="9">${term}</text>
        `;
            });

            // OR Gate at output
            const orY = svgHeight / 2 - 25;
            if (termCount > 1) {
                svg += `
          <g transform="translate(360, ${orY})">
            <path d="M0,0 Q18,12 18,25 Q18,38 0,50 Q28,50 45,25 Q28,0 0,0 Z" fill="#0b1329" stroke="#a855f7" stroke-width="2.5" />
            <text x="16" y="30" fill="#a855f7" font-family="JetBrains Mono" font-size="10" font-weight="bold">OR</text>
          </g>
        `;

                // Connect AND outputs to OR inputs
                andOutputsY.forEach(yOut => {
                    svg += `
            <line x1="225" y1="${yOut}" x2="310" y2="${yOut}" stroke="#00f5ff" stroke-width="1.5" />
            <line x1="310" y1="${yOut}" x2="360" y2="${orY + 25}" stroke="#00f5ff" stroke-width="1.5" />
          `;
                });

                // Final output
                svg += `
          <line x1="405" y1="${orY + 25}" x2="490" y2="${orY + 25}" stroke="#00ff88" stroke-width="2.5" />
          <circle cx="510" cy="${orY + 25}" r="14" fill="#00ff88" filter="drop-shadow(0 0 10px #00ff88)" />
          <text x="532" y="${orY + 29}" fill="#00ff88" font-family="JetBrains Mono" font-size="13" font-weight="bold">Q</text>
        `;
            } else {
                // Only 1 term
                svg += `
          <line x1="225" y1="${andOutputsY[0]}" x2="420" y2="${andOutputsY[0]}" stroke="#00ff88" stroke-width="2.5" />
          <circle cx="440" cy="${andOutputsY[0]}" r="14" fill="#00ff88" filter="drop-shadow(0 0 10px #00ff88)" />
          <text x="462" y="${andOutputsY[0] + 4}" fill="#00ff88" font-family="JetBrains Mono" font-size="13" font-weight="bold">Q</text>
        `;
            }

            svg += `</svg>`;
            return svg;
        }

        function renderDynamicCircuitPOS_SVG(terms, vars) {
            return renderDynamicCircuitSVG(terms, vars); // Clean symmetric 2-level layout
        }

        function renderSimpleLogicSVG(val, vars) {
            return `
        <svg width="400" height="90" viewBox="0 0 400 90" class="select-none font-mono-code">
          <text x="40" y="50" fill="#64748b" font-size="13">Input ${vars.join(', ')}</text>
          <line x1="160" y1="45" x2="260" y2="45" stroke="${val === '1' ? '#00ff88' : '#334155'}" stroke-width="3" />
          <circle cx="280" cy="45" r="16" class="${val === '1' ? 'led-bulb-on' : 'led-bulb-off'}" stroke-width="2" />
          <text x="310" y="50" fill="${val === '1' ? '#00ff88' : '#64748b'}" font-size="14" font-weight="bold">Q = ${val}</text>
        </svg>
      `;
        }


        /* ==========================================================
           PERTEMUAN 4: PETA KARNAUGH (K-MAP 2, 3, 4, & 5 INPUT)
           ========================================================== */
        function renderBab4(container) {
            container.innerHTML = `
        <!-- Sub-Navigasi Fitur Pertemuan 4 -->
        <div class="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
          <button onclick="switchBabTab(4, 'beranda')" data-bab-tab="4" data-tab-target="beranda" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 active-bab-tab">
            <span>🏠</span> <span>Beranda Materi</span>
          </button>
          <button onclick="switchBabTab(4, 'fitur1')" data-bab-tab="4" data-tab-target="fitur1" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800">
            <span>▦</span> <span>Fitur 1: K-Map Interaktif (2–5 Input)</span>
          </button>
          <button onclick="switchBabTab(4, 'fitur2')" data-bab-tab="4" data-tab-target="fitur2" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800">
            <span>Σ</span> <span>Fitur 2: Solver Minterm Langsung</span>
          </button>
          <button onclick="launchQuiz(4)" class="ml-auto px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:scale-105 shadow">
            <span>📝</span> <span>Kuis Pekan 4</span>
          </button>
        </div>

        <!-- ================= BERANDA SECTION ================= -->
        <div id="bab4_sec_beranda" data-bab="4" class="space-y-6">
          <!-- Beranda Materi Pertemuan 4 -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div class="inline-block text-xs font-mono-code text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-800">
                Materi Pokok Pertemuan 04
              </div>
              <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-2 transition hover:scale-105 shadow-md group" title="Buka Materi Lengkap Bab 4 di Google Drive">
                <svg class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                <span>Materi Lengkap Bab 4 (Google Drive)</span>
                <span class="text-emerald-400 font-bold">↗</span>
              </a>
            </div>

            <div>
              <h2 class="text-2xl sm:text-3xl font-black text-white">Peta Karnaugh (K-Map) & Optimasi Logika</h2>
              <p class="text-sm text-slate-300 leading-relaxed mt-2">
                Peta Karnaugh (K-Map) adalah metode grafis dua dimensi yang diperkenalkan oleh Maurice Karnaugh (1953) di Bell Labs untuk menyederhanakan fungsi aljabar Boolean tanpa manipulasi rumus yang rumit. K-Map mengatur minterm dalam kisi matriks dengan urutan <strong>Kode Gray (Gray Code: 00, 01, 11, 10)</strong>, di mana sel-sel yang bersebelahan secara fisik hanya berbeda tepat satu bit.
              </p>
            </div>

            <!-- Aturan Pengelompokan & Cara Kerja K-Map -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <b class="text-cyan-400 block text-sm">1. Aturan Pangkat Dua (2ⁿ)</b>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Kelompok sel yang digabungkan (loop) harus berukuran perpangkatan dua: <strong>1, 2, 4, 8, 16, atau 32 sel</strong>. Tidak diperbolehkan membentuk kelompok berukuran 3, 5, atau 6 sel.
                </p>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <b class="text-purple-400 block text-sm">2. Pembungkusan Tepi (Wrapping)</b>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Sel di tepi paling kiri berdampingan secara logis dengan tepi paling kanan, dan sel di baris paling atas berdampingan dengan baris paling bawah (topologi silinder/torus).
                </p>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <b class="text-amber-400 block text-sm">3. Kondisi Don't Care (X)</b>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Kondisi Don't Care (X) dapat dianggap sebagai <strong>1</strong> jika membantu memperbesar ukuran kelompok, atau dianggap <strong>0</strong> jika tidak diperlukan.
                </p>
              </div>
            </div>
          </div>

          <!-- Panel Pilihan Fitur & Laboratorium Bab 4 -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-200 flex items-center gap-2">
                <span>⚡</span> Laboratorium & Fitur Interaktif Pertemuan 04
              </h3>
              <span class="text-[11px] text-slate-400">Pilih modul laboratorium yang ingin Anda gunakan:</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Card Fitur 1 -->
              <div onclick="switchBabTab(4, 'fitur1')" class="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/40 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] cursor-pointer group flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-xl shadow">▦</span>
                    <span class="text-[10px] font-mono-code text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">Fitur 1</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-base group-hover:text-amber-300 transition">K-Map Interaktif (2, 3, 4, & 5 Input)</h4>
                    <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Kisi matriks K-Map interaktif 2D Gray Code. Klik sel untuk toggle nilai (0 ➔ 1 ➔ X), sistem menghitung grup Prime Implicant, SOP, dan POS secara otomatis.
                    </p>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-amber-400 font-semibold">
                  <span>Buka Fitur Ini</span>
                  <span class="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>

              <!-- Card Fitur 2 -->
              <div onclick="switchBabTab(4, 'fitur2')" class="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,245,255,0.25)] cursor-pointer group flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-xl shadow">Σ</span>
                    <span class="text-[10px] font-mono-code text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">Fitur 2</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-base group-hover:text-cyan-300 transition">Solver Notasi Minterm Langsung</h4>
                    <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Selesaikan soal tipe ujian [Q = Σm(...) + d(...)]. Cukup ketik daftar nomor minterm dan don't care, kisi K-Map langsung terisi dan disederhanakan seketika!
                    </p>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-cyan-400 font-semibold">
                  <span>Buka Fitur Ini</span>
                  <span class="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>

              <!-- Card Kuis 20 Soal -->
              <div onclick="launchQuiz(4)" class="p-5 rounded-2xl bg-slate-900/90 border border-purple-500/40 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] cursor-pointer group flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-xl shadow">📝</span>
                    <span class="text-[10px] font-mono-code text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">Evaluasi</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-base group-hover:text-purple-300 transition">Kuis Pekan 4 (20 Soal)</h4>
                    <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Uji kemampuan optimasi K-Map, pengelompokan sel Gray Code, Prime Implicants, dan cetak sertifikat resmi kelulusan modul.
                    </p>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-purple-400 font-semibold">
                  <span>Mulai Kuis Sekarang</span>
                  <span class="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Banner Google Drive Bab 4 -->
          <div class="holo-card p-5 sm:p-6 rounded-2xl border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                📁
              </div>
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-emerald-400 mb-0.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Dokumen & Modul Kuliah Pertemuan 04
                </div>
                <h4 class="font-bold text-white text-base">Unduh Materi Lengkap Bab 4 di Google Drive</h4>
                <p class="text-xs text-slate-300">Dapatkan modul lengkap K-Map 2-5 variabel, Prime Implicants, dan metode Quine-McCluskey.</p>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-emerald-200 hover:text-white flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:scale-105 transition">
              <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
              <span>Buka Materi di Google Drive ↗</span>
            </a>
          </div>

          <!-- Tombol Kuis Mingguan (20 Soal) -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 class="font-bold text-white text-base">Uji Pemahaman: Kuis Pekan 4 (20 Soal)</h4>
              <p class="text-xs text-slate-400">Kerjakan 20 butir soal K-Map 2-5 variabel, pengelompokan Gray Code, dan raih sertifikat resmi.</p>
            </div>
            <button onclick="launchQuiz(4)" class="holo-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white whitespace-nowrap">
              Akses Kuis Pekan 4 (20 Soal)
            </button>
          </div>
        </div>

        <!-- ================= FITUR 1 SECTION ================= -->
        <div id="bab4_sec_fitur1" data-bab="4" class="hidden space-y-4">
          <div class="flex items-center justify-between">
            <button onclick="switchBabTab(4, 'beranda')" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 hover:border-amber-500 transition">
              <span>← Kembali ke Beranda Materi</span>
            </button>
            <button onclick="switchBabTab(4, 'fitur2')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
              Ke Fitur 2 (Solver Notasi) ➔
            </button>
          </div>

          <!-- FITUR 1: PENYEDERHANA LANGSUNG K-MAP (2, 3, 4, & 5 INPUT) -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-amber-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800 mb-1">
                  <span>Fitur 1</span> • K-Map Interaktif
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-amber-400 text-xl">▦</span> Penyederhana Langsung Persamaan Boolean dengan K-Map (2, 3, 4, dan 5 Input)
                </h3>
                <p class="text-xs text-slate-400">Pilih jumlah input (2, 3, 4, atau 5 variabel). Klik pada sel K-Map untuk mengganti nilai (0 ➔ 1 ➔ X ➔ 0). Hasil penyederhanaan SOP & POS akan langsung keluar otomatis!</p>
              </div>
            </div>

            <!-- Pemilih Variabel K-Map & Preset Cepat -->
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-2">
                <span class="text-xs text-slate-400 font-semibold">Pilih Jumlah Inputan:</span>
                <select id="kmap_var" onchange="buildKMapGrid()" class="bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-amber-300 font-mono-code font-bold focus:border-amber-400">
                  <option value="2">2 Input (A, B) • 4 Sel</option>
                  <option value="3">3 Input (A, B, C) • 8 Sel</option>
                  <option value="4" selected>4 Input (A, B, C, D) • 16 Sel</option>
                  <option value="5">5 Input (A, B, C, D, E) • 32 Sel (2 Subkisi 4x4)</option>
                </select>
              </div>

              <div class="flex items-center gap-2 text-xs font-mono-code">
                <button onclick="clearKMapGrid(0)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-300 hover:text-white">Reset Semua 0</button>
                <button onclick="clearKMapGrid(1)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-300 hover:text-white">Set Semua 1</button>
              </div>
            </div>

            <!-- Grid K-Map Interaktif -->
            <div class="p-4 rounded-2xl bg-[#06080e] border border-amber-500/30 overflow-x-auto flex flex-col items-center justify-center min-h-[220px]">
              <div id="kmapContainer">
                <!-- Rendered by buildKMapGrid() -->
              </div>
            </div>

            <!-- Hasil Penyederhanaan K-Map Otomatis -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 font-mono-code space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-amber-400 font-bold">Hasil Penyederhanaan SOP (Minterm):</span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300">Sum of Products</span>
                </div>
                <div id="kmapSimplifiedResultSOP" class="text-lg font-black text-cyan-300 break-words">Q = 0</div>
                <div id="kmapMintermList" class="text-xs text-slate-400">Minterm: Σm(-)</div>
              </div>

              <div class="p-4 rounded-xl bg-slate-950/80 border border-purple-500/20 font-mono-code space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-purple-400 font-bold">Hasil Penyederhanaan POS (Maxterm):</span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-purple-950 border border-purple-800 text-purple-300">Product of Sums</span>
                </div>
                <div id="kmapSimplifiedResultPOS" class="text-lg font-black text-purple-300 break-words">Q = 0</div>
                <div id="kmapMaxtermList" class="text-xs text-slate-400">Maxterm: ΠM(-)</div>
              </div>
            </div>

            <!-- Prime Implicants List -->
            <div id="kmapPIDetails" class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono-code space-y-1.5">
              <b class="text-slate-200 block">Daftar Prime Implicants (PI) & Essential Prime Implicants (EPI):</b>
              <div id="qmcPIList" class="text-slate-400 text-[11px]">Memuat data pengelompokan sel...</div>
            </div>
          </div>
        </div>

        <!-- ================= FITUR 2 SECTION ================= -->
        <div id="bab4_sec_fitur2" data-bab="4" class="hidden space-y-4">
          <div class="flex items-center justify-between">
            <button onclick="switchBabTab(4, 'beranda')" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 hover:border-cyan-500 transition">
              <span>← Kembali ke Beranda Materi</span>
            </button>
            <button onclick="switchBabTab(4, 'fitur1')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
              ← Ke Fitur 1 (K-Map Interaktif)
            </button>
          </div>

          <!-- FITUR 2: PENYEDERHANA LANGSUNG DARI PERSAMAAN MINTERM Σm(...) + d(...) -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-cyan-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800 mb-1">
                  <span>Fitur 2</span> • Solver Langsung Notasi Minterm
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-cyan-400 text-xl">Σ</span> Penyederhana Langsung Notasi Persamaan [Q = Σm(1,2,3...n) + d(...)]
                </h3>
                <p class="text-xs text-slate-400">
                  Masukkan langsung nomor-nomor minterm yang bernilai 1 serta don't care opsional. Sel K-Map akan langsung terisi dan hasil penyederhanaan akan keluar seketika!
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              
              <div class="sm:col-span-6 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Daftar Minterm Σm (Pisahkan dengan koma atau spasi):</label>
                <input type="text" id="kmap_direct_minterms" value="1, 3, 5, 7, 9, 11, 13, 15" placeholder="Contoh: 0, 2, 5, 7, 8, 10, 15" class="w-full bg-slate-950 border border-cyan-500/40 rounded-xl p-2.5 text-sm text-cyan-300 font-mono-code font-bold focus:outline-none focus:border-cyan-400" />
              </div>

              <div class="sm:col-span-4 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Don't Care d (Opsional):</label>
                <input type="text" id="kmap_direct_dontcare" value="" placeholder="Contoh: 2, 6" class="w-full bg-slate-950 border border-purple-500/40 rounded-xl p-2.5 text-sm text-purple-300 font-mono-code focus:outline-none focus:border-purple-400" />
              </div>

              <div class="sm:col-span-2 pt-5">
                <button onclick="applyDirectMintermEquation()" class="w-full holo-btn py-2.5 rounded-xl text-xs font-bold text-white shadow">
                  Terapkan & Hitung
                </button>
              </div>

            </div>

            <div class="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-xs font-mono-code flex items-center justify-between">
              <span class="text-slate-400">Contoh format: Masukkan <code class="text-cyan-300 font-bold">1, 3, 7, 11, 15</code> untuk menyederhanakan minterm aktif pada K-Map.</span>
              <span class="text-emerald-400 font-bold">Terkoneksi Otomatis ke Kisi K-Map</span>
            </div>
          </div>
        </div>
      `;

            buildKMapGrid();
        }

        /* State K-Map */
        let kmapState = {}; // { 0: 0, 1: 1, 2: 'X', ... }

        function clearKMapGrid(val = 0) {
            const vars = parseInt(document.getElementById('kmap_var').value);
            const totalCells = 1 << vars;
            for (let i = 0; i < totalCells; i++) {
                kmapState[i] = val;
                updateKCellDOM(i, val);
            }
            solveKMap();
        }

        function toggleKCell(m) {
            const cur = kmapState[m] !== undefined ? kmapState[m] : 0;
            let next = 0;
            if (cur === 0) next = 1;
            else if (cur === 1) next = 'X';
            else next = 0;

            kmapState[m] = next;
            updateKCellDOM(m, next);
            solveKMap();
        }

        function updateKCellDOM(m, val) {
            const btn = document.getElementById('kc_' + m);
            if (!btn) return;
            btn.innerHTML = `<span class="text-[9px] text-slate-500 leading-none">m${m}</span><span class="font-bold text-sm">${val}</span>`;
            if (val === 1) {
                btn.className = "w-11 h-12 rounded-lg bg-cyan-950 border-2 border-cyan-400 text-cyan-300 font-bold shadow-[0_0_12px_rgba(0,245,255,0.4)] flex flex-col items-center justify-center kmap-cell";
            } else if (val === 'X') {
                btn.className = "w-11 h-12 rounded-lg bg-purple-950 border-2 border-purple-400 text-purple-300 font-bold shadow-[0_0_12px_rgba(168,85,247,0.4)] flex flex-col items-center justify-center kmap-cell";
            } else {
                btn.className = "w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 hover:border-amber-400 flex flex-col items-center justify-center kmap-cell";
            }
        }

        /* Generator Grid K-Map 2, 3, 4, dan 5 Variabel */
        function buildKMapGrid() {
            const vars = parseInt(document.getElementById('kmap_var').value);
            const container = document.getElementById('kmapContainer');
            kmapState = {};

            if (vars === 2) {
                // 2 Variabel (A, B) -> 4 Sel (2x2)
                container.innerHTML = `
          <div class="text-center font-mono-code text-xs">
            <div class="grid grid-cols-3 gap-1.5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
              <div class="text-slate-500 font-bold p-2 flex items-center justify-center">A \\ B</div>
              <div class="text-cyan-400 font-bold p-2">0</div>
              <div class="text-cyan-400 font-bold p-2">1</div>

              <div class="text-purple-400 font-bold p-2">0</div>
              <button onclick="toggleKCell(0)" id="kc_0" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m0</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(1)" id="kc_1" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m1</span><span class="font-bold text-sm">0</span></button>

              <div class="text-purple-400 font-bold p-2">1</div>
              <button onclick="toggleKCell(2)" id="kc_2" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m2</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(3)" id="kc_3" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m3</span><span class="font-bold text-sm">0</span></button>
            </div>
          </div>
        `;
                [0, 1, 2, 3].forEach(i => kmapState[i] = 0);
            } else if (vars === 3) {
                // 3 Variabel (A, B, C) -> 8 Sel (2x4)
                container.innerHTML = `
          <div class="text-center font-mono-code text-xs">
            <div class="grid grid-cols-5 gap-1.5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
              <div class="text-slate-500 font-bold p-2 flex items-center justify-center">A \\ BC</div>
              <div class="text-cyan-400 font-bold p-2">00</div>
              <div class="text-cyan-400 font-bold p-2">01</div>
              <div class="text-cyan-400 font-bold p-2">11</div>
              <div class="text-cyan-400 font-bold p-2">10</div>

              <div class="text-purple-400 font-bold p-2 flex items-center justify-center">0</div>
              <button onclick="toggleKCell(0)" id="kc_0" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m0</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(1)" id="kc_1" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m1</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(3)" id="kc_3" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m3</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(2)" id="kc_2" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m2</span><span class="font-bold text-sm">0</span></button>

              <div class="text-purple-400 font-bold p-2 flex items-center justify-center">1</div>
              <button onclick="toggleKCell(4)" id="kc_4" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m4</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(5)" id="kc_5" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m5</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(7)" id="kc_7" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m7</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(6)" id="kc_6" class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m6</span><span class="font-bold text-sm">0</span></button>
            </div>
          </div>
        `;
                [0, 1, 2, 3, 4, 5, 6, 7].forEach(i => kmapState[i] = 0);
            } else if (vars === 4) {
                // 4 Variabel (A, B, C, D) -> 16 Sel (4x4)
                container.innerHTML = `
          <div class="text-center font-mono-code text-xs">
            <div class="grid grid-cols-5 gap-1.5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
              <div class="text-slate-500 font-bold p-2 flex items-center justify-center">AB \\ CD</div>
              <div class="text-cyan-400 font-bold p-2">00</div>
              <div class="text-cyan-400 font-bold p-2">01</div>
              <div class="text-cyan-400 font-bold p-2">11</div>
              <div class="text-cyan-400 font-bold p-2">10</div>

              <div class="text-purple-400 font-bold p-2 flex items-center justify-center">00</div>
              <button onclick="toggleKCell(0)" id="kc_0" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m0</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(1)" id="kc_1" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m1</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(3)" id="kc_3" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m3</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(2)" id="kc_2" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m2</span><span class="font-bold text-sm">0</span></button>

              <div class="text-purple-400 font-bold p-2 flex items-center justify-center">01</div>
              <button onclick="toggleKCell(4)" id="kc_4" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m4</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(5)" id="kc_5" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m5</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(7)" id="kc_7" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m7</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(6)" id="kc_6" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m6</span><span class="font-bold text-sm">0</span></button>

              <div class="text-purple-400 font-bold p-2 flex items-center justify-center">11</div>
              <button onclick="toggleKCell(12)" id="kc_12" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m12</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(13)" id="kc_13" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m13</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(15)" id="kc_15" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m15</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(14)" id="kc_14" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m14</span><span class="font-bold text-sm">0</span></button>

              <div class="text-purple-400 font-bold p-2 flex items-center justify-center">10</div>
              <button onclick="toggleKCell(8)" id="kc_8" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m8</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(9)" id="kc_9" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m9</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(11)" id="kc_11" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m11</span><span class="font-bold text-sm">0</span></button>
              <button onclick="toggleKCell(10)" id="kc_10" class="w-11 h-12 rounded-lg bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[9px] text-slate-500 leading-none">m10</span><span class="font-bold text-sm">0</span></button>
            </div>
          </div>
        `;
                for (let i = 0; i < 16; i++) kmapState[i] = 0;
            } else {
                // 5 Variabel (A, B, C, D, E) -> 32 Sel (2 subkisi 4x4: A=0 dan A=1)
                container.innerHTML = `
          <div class="space-y-4 font-mono-code text-xs">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
              
              <!-- Subkisi 1: A = 0 (m0 s.d. m15) -->
              <div class="p-3.5 rounded-2xl bg-slate-900/70 border border-cyan-500/30">
                <div class="text-cyan-400 font-bold mb-2 flex items-center justify-between">
                  <span>Subkisi A = 0 (m0 s.d. m15)</span>
                  <span class="text-[10px] text-slate-400">BC \\ DE</span>
                </div>
                <div class="grid grid-cols-5 gap-1 text-center">
                  <div class="text-slate-500 p-1">BC \\ DE</div>
                  <div class="text-cyan-400 font-bold p-1">00</div>
                  <div class="text-cyan-400 font-bold p-1">01</div>
                  <div class="text-cyan-400 font-bold p-1">11</div>
                  <div class="text-cyan-400 font-bold p-1">10</div>

                  <div class="text-purple-400 font-bold p-1">00</div>
                  <button onclick="toggleKCell(0)" id="kc_0" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m0</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(1)" id="kc_1" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m1</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(3)" id="kc_3" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m3</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(2)" id="kc_2" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m2</span><span class="font-bold text-xs">0</span></button>

                  <div class="text-purple-400 font-bold p-1">01</div>
                  <button onclick="toggleKCell(4)" id="kc_4" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m4</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(5)" id="kc_5" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m5</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(7)" id="kc_7" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m7</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(6)" id="kc_6" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m6</span><span class="font-bold text-xs">0</span></button>

                  <div class="text-purple-400 font-bold p-1">11</div>
                  <button onclick="toggleKCell(12)" id="kc_12" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m12</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(13)" id="kc_13" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m13</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(15)" id="kc_15" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m15</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(14)" id="kc_14" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m14</span><span class="font-bold text-xs">0</span></button>

                  <div class="text-purple-400 font-bold p-1">10</div>
                  <button onclick="toggleKCell(8)" id="kc_8" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m8</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(9)" id="kc_9" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m9</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(11)" id="kc_11" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m11</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(10)" id="kc_10" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m10</span><span class="font-bold text-xs">0</span></button>
                </div>
              </div>

              <!-- Subkisi 2: A = 1 (m16 s.d. m31) -->
              <div class="p-3.5 rounded-2xl bg-slate-900/70 border border-purple-500/30">
                <div class="text-purple-400 font-bold mb-2 flex items-center justify-between">
                  <span>Subkisi A = 1 (m16 s.d. m31)</span>
                  <span class="text-[10px] text-slate-400">BC \\ DE</span>
                </div>
                <div class="grid grid-cols-5 gap-1 text-center">
                  <div class="text-slate-500 p-1">BC \\ DE</div>
                  <div class="text-cyan-400 font-bold p-1">00</div>
                  <div class="text-cyan-400 font-bold p-1">01</div>
                  <div class="text-cyan-400 font-bold p-1">11</div>
                  <div class="text-cyan-400 font-bold p-1">10</div>

                  <div class="text-purple-400 font-bold p-1">00</div>
                  <button onclick="toggleKCell(16)" id="kc_16" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m16</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(17)" id="kc_17" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m17</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(19)" id="kc_19" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m19</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(18)" id="kc_18" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m18</span><span class="font-bold text-xs">0</span></button>

                  <div class="text-purple-400 font-bold p-1">01</div>
                  <button onclick="toggleKCell(20)" id="kc_20" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m20</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(21)" id="kc_21" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m21</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(23)" id="kc_23" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m23</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(22)" id="kc_22" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m22</span><span class="font-bold text-xs">0</span></button>

                  <div class="text-purple-400 font-bold p-1">11</div>
                  <button onclick="toggleKCell(28)" id="kc_28" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m28</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(29)" id="kc_29" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m29</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(31)" id="kc_31" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m31</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(30)" id="kc_30" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m30</span><span class="font-bold text-xs">0</span></button>

                  <div class="text-purple-400 font-bold p-1">10</div>
                  <button onclick="toggleKCell(24)" id="kc_24" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m24</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(25)" id="kc_25" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m25</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(27)" id="kc_27" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m27</span><span class="font-bold text-xs">0</span></button>
                  <button onclick="toggleKCell(26)" id="kc_26" class="w-10 h-10 rounded bg-slate-950 border border-slate-700 text-slate-500 flex flex-col items-center justify-center kmap-cell"><span class="text-[8px] text-slate-500">m26</span><span class="font-bold text-xs">0</span></button>
                </div>
              </div>

            </div>
          </div>
        `;
                for (let i = 0; i < 32; i++) kmapState[i] = 0;
            }

            solveKMap();
        }

        /* Pemroses Fitur 2: Notasi Minterm Langsung */
        function applyDirectMintermEquation() {
            const minStr = document.getElementById('kmap_direct_minterms').value.trim();
            const dcStr = document.getElementById('kmap_direct_dontcare').value.trim();
            const vars = parseInt(document.getElementById('kmap_var').value);
            const totalCells = 1 << vars;

            // Reset dulu
            for (let i = 0; i < totalCells; i++) {
                kmapState[i] = 0;
                updateKCellDOM(i, 0);
            }

            // Parse Minterms
            if (minStr) {
                const parts = minStr.split(/[,\s]+/).filter(Boolean);
                parts.forEach(p => {
                    const num = parseInt(p.trim());
                    if (!isNaN(num) && num >= 0 && num < totalCells) {
                        kmapState[num] = 1;
                        updateKCellDOM(num, 1);
                    }
                });
            }

            // Parse Don't Cares
            if (dcStr) {
                const parts = dcStr.split(/[,\s]+/).filter(Boolean);
                parts.forEach(p => {
                    const num = parseInt(p.trim());
                    if (!isNaN(num) && num >= 0 && num < totalCells) {
                        kmapState[num] = 'X';
                        updateKCellDOM(num, 'X');
                    }
                });
            }

            solveKMap();
        }

        /* Core K-Map Solver */
        function solveKMap() {
            const vars = parseInt(document.getElementById('kmap_var').value);
            const varNames = ['A', 'B', 'C', 'D', 'E'].slice(0, vars);
            const max = 1 << vars;

            const ones = [];
            const dcares = [];
            Object.keys(kmapState).forEach(k => {
                const idx = parseInt(k);
                if (idx < max) {
                    if (kmapState[k] === 1) ones.push(idx);
                    if (kmapState[k] === 'X') dcares.push(idx);
                }
            });

            const resSOP = document.getElementById('kmapSimplifiedResultSOP');
            const resPOS = document.getElementById('kmapSimplifiedResultPOS');
            const minElem = document.getElementById('kmapMintermList');
            const maxElem = document.getElementById('kmapMaxtermList');
            const piElem = document.getElementById('qmcPIList');
            if (!resSOP || !resPOS) return;

            const onesSet = new Set(ones);
            const dcaresSet = new Set(dcares);
            const zeros = [];
            for (let i = 0; i < max; i++) {
                if (!onesSet.has(i) && !dcaresSet.has(i)) zeros.push(i);
            }

            minElem.innerText = `Minterm: Σm(${ones.join(', ') || '-'}) ${dcares.length > 0 ? '+ d(' + dcares.join(',') + ')' : ''}`;
            maxElem.innerText = `Maxterm: ΠM(${zeros.join(', ') || '-'}) ${dcares.length > 0 ? '· D(' + dcares.join(',') + ')' : ''}`;

            if (ones.length === 0) {
                resSOP.innerText = "Q = 0";
                resPOS.innerText = "Q = 0";
                if (piElem) piElem.innerHTML = "<span class='text-slate-500'>Tidak ada minterm aktif. Seluruh sel bernilai 0.</span>";
                return;
            }

            if (ones.length === max) {
                resSOP.innerText = "Q = 1";
                resPOS.innerText = "Q = 1";
                if (piElem) piElem.innerHTML = "<span class='text-cyan-400 font-bold'>Fungsi Tautologi (Semua sel bernilai 1). Output selalu bernilai 1.</span>";
                return;
            }

            // Hitung SOP via QMC
            const sopRes = solveQuineMcCluskeyCore(ones, dcares, vars, varNames);
            const sopTerms = sopRes.chosen.map(pi => {
                let term = '';
                for (let i = 0; i < vars; i++) {
                    if (pi.mask[i] === '1') term += varNames[i];
                    else if (pi.mask[i] === '0') term += varNames[i] + "'";
                }
                return term || '1';
            });
            resSOP.innerText = "Q = " + (sopTerms.length > 0 ? sopTerms.join(' + ') : '0');

            // Hitung POS via QMC pada Zeros (Maxterm)
            if (zeros.length === 0) {
                resPOS.innerText = "Q = 1";
            } else {
                const posRes = solveQuineMcCluskeyCore(zeros, dcares, vars, varNames);
                const posTerms = posRes.chosen.map(pi => {
                    let sumLiterals = [];
                    for (let i = 0; i < vars; i++) {
                        if (pi.mask[i] === '0') sumLiterals.push(varNames[i]);
                        else if (pi.mask[i] === '1') sumLiterals.push(varNames[i] + "'");
                    }
                    if (sumLiterals.length === 0) return '0';
                    if (sumLiterals.length === 1) return sumLiterals[0];
                    return '(' + sumLiterals.join(' + ') + ')';
                });
                resPOS.innerText = "Q = " + (posTerms.length > 0 ? posTerms.join(' · ') : '1');
            }

            // Tampilkan Prime Implicants
            if (piElem) {
                let piHtml = `<div class="space-y-1"><div><strong>Prime Implicants:</strong> ${sopRes.primeImplicants.map(p => p.mask).join(', ') || '-'}</div>`;
                piHtml += `<div><strong>Essential Prime Implicants (EPI):</strong> <span class="text-cyan-300 font-bold">${sopRes.essentialPIs.map(p => p.mask).join(', ') || 'Semua PI saling menutupi'}</span></div></div>`;
                piElem.innerHTML = piHtml;
            }
        }


        /* ==========================================================
           PERTEMUAN 5: RANGKAIAN ADDER & SUBTRACTOR BINER
           ========================================================== */
        function renderBab5(container) {
            container.innerHTML = `
        <!-- Sub-Navigasi Fitur Pertemuan 5 -->
        <div class="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
          <button onclick="switchBabTab(5, 'beranda')" data-bab-tab="5" data-tab-target="beranda" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 active-bab-tab">
            <span>🏠</span> <span>Beranda Materi</span>
          </button>
          <button onclick="switchBabTab(5, 'fitur1')" data-bab-tab="5" data-tab-target="fitur1" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800">
            <span>➕</span> <span>Fitur 1: Aritmatika Bersusun</span>
          </button>
          <button onclick="switchBabTab(5, 'fitur2')" data-bab-tab="5" data-tab-target="fitur2" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800">
            <span>∑</span> <span>Fitur 2: Rangkaian Adder (HA/FA)</span>
          </button>
          <button onclick="switchBabTab(5, 'fitur3')" data-bab-tab="5" data-tab-target="fitur3" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800">
            <span>∆</span> <span>Fitur 3: Rangkaian Subtractor (HS/FS)</span>
          </button>
          <button onclick="launchQuiz(5)" class="ml-auto px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:scale-105 shadow">
            <span>📝</span> <span>Kuis Pekan 5</span>
          </button>
        </div>

        <!-- ================= BERANDA SECTION ================= -->
        <div id="bab5_sec_beranda" data-bab="5" class="space-y-6">
          <!-- Beranda Materi Pertemuan 5 -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div class="inline-block text-xs font-mono-code text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-800">
                Materi Pokok Pertemuan 05
              </div>
              <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-2 transition hover:scale-105 shadow-md group" title="Buka Materi Lengkap Bab 5 di Google Drive">
                <svg class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                <span>Materi Lengkap Bab 5 (Google Drive)</span>
                <span class="text-emerald-400 font-bold">↗</span>
              </a>
            </div>

            <div>
              <h2 class="text-2xl sm:text-3xl font-black text-white">Rangkaian Adder & Subtractor (Aritmatika Biner)</h2>
              <p class="text-sm text-slate-300 leading-relaxed mt-2">
                Rangkaian Adder (Penjumlah) dan Subtractor (Pengurang) adalah sirkuit kombinasional inti dalam Arithmetic Logic Unit (ALU) prosesor. Operasi penjumlahan biner menghasilkan bit <strong>Sum (S)</strong> dan <strong>Carry-out (Cout)</strong>, sedangkan pengurangan biner menghasilkan bit <strong>Difference (D)</strong> dan <strong>Borrow-out (Bout)</strong>.
              </p>
            </div>

            <!-- Komparasi 4 Rangkaian Utama -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1 text-xs">
              
              <div class="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-2">
                <b class="text-cyan-400 block text-sm font-mono-code">Half Adder (HA)</b>
                <p class="text-slate-400 leading-relaxed">Menjumlahkan 2 bit input (A dan B) tanpa masukan carry sebelumnya.</p>
                <div class="font-mono-code text-[11px] text-cyan-300 space-y-0.5">
                  <div>S = A ⊕ B</div>
                  <div>C = A · B</div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-2">
                <b class="text-emerald-400 block text-sm font-mono-code">Full Adder (FA)</b>
                <p class="text-slate-400 leading-relaxed">Menjumlahkan 3 bit (A, B, dan Cin). Dibangun dari 2 Half Adder + 1 Gerbang OR.</p>
                <div class="font-mono-code text-[11px] text-emerald-300 space-y-0.5">
                  <div>S = A ⊕ B ⊕ Cin</div>
                  <div>Cout = AB + Cin(A⊕B)</div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-slate-950/80 border border-pink-500/30 space-y-2">
                <b class="text-pink-400 block text-sm font-mono-code">Half Subtractor (HS)</b>
                <p class="text-slate-400 leading-relaxed">Mengurangkan 2 bit (A - B) tanpa masukan borrow sebelumnya.</p>
                <div class="font-mono-code text-[11px] text-pink-300 space-y-0.5">
                  <div>D = A ⊕ B</div>
                  <div>Bout = A' · B</div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 space-y-2">
                <b class="text-purple-400 block text-sm font-mono-code">Full Subtractor (FS)</b>
                <p class="text-slate-400 leading-relaxed">Mengurangkan 3 bit (A - B - Bin). Dibangun dari 2 Half Subtractor + 1 OR.</p>
                <div class="font-mono-code text-[11px] text-purple-300 space-y-0.5">
                  <div>D = A ⊕ B ⊕ Bin</div>
                  <div>Bout = A'B + Bin(A⊕B)'</div>
                </div>
              </div>

            </div>
          </div>

          <!-- Panel Pilihan Fitur & Laboratorium Bab 5 -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-200 flex items-center gap-2">
                <span>⚡</span> Laboratorium & Fitur Interaktif Pertemuan 05
              </h3>
              <span class="text-[11px] text-slate-400">Pilih modul laboratorium yang ingin Anda gunakan:</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Card Fitur 1 -->
              <div onclick="switchBabTab(5, 'fitur1')" class="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] cursor-pointer group flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xl shadow">➕</span>
                    <span class="text-[10px] font-mono-code text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">Fitur 1</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-base group-hover:text-emerald-300 transition">Aritmatika Bersusun ke Bawah</h4>
                    <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Penjumlahan (+ Carry) dan Pengurangan (− Borrow) biner bersusun ke bawah dengan auto-convert radiks (Desimal, Biner, Oktal, Heksa) & rincian per-bit.
                    </p>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-emerald-400 font-semibold">
                  <span>Buka Fitur Ini</span>
                  <span class="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>

              <!-- Card Fitur 2 -->
              <div onclick="switchBabTab(5, 'fitur2')" class="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,245,255,0.25)] cursor-pointer group flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-xl shadow">∑</span>
                    <span class="text-[10px] font-mono-code text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">Fitur 2</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-base group-hover:text-cyan-300 transition">Rangkaian Penjumlah (Adder)</h4>
                    <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Tabel kebenaran interaktif Half Adder (2-bit) dan Full Adder (3-bit: A, B, Cin) lengkap dengan persamaan logika output Sum, Carry, dan skematik gerbang.
                    </p>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-cyan-400 font-semibold">
                  <span>Buka Fitur Ini</span>
                  <span class="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>

              <!-- Card Fitur 3 -->
              <div onclick="switchBabTab(5, 'fitur3')" class="p-5 rounded-2xl bg-slate-900/90 border border-pink-500/40 hover:border-pink-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] cursor-pointer group flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-xl shadow">∆</span>
                    <span class="text-[10px] font-mono-code text-pink-400 bg-pink-950/80 px-2 py-0.5 rounded border border-pink-800">Fitur 3</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-base group-hover:text-pink-300 transition">Rangkaian Pengurang (Subtractor)</h4>
                    <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Tabel kebenaran Half Subtractor dan Full Subtractor interaktif (A, B, Bin) beserta persamaan Difference, Borrow-out, dan diagram gerbang logika.
                    </p>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-pink-400 font-semibold">
                  <span>Buka Fitur Ini</span>
                  <span class="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Banner Google Drive Bab 5 -->
          <div class="holo-card p-5 sm:p-6 rounded-2xl border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                📁
              </div>
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-emerald-400 mb-0.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Dokumen & Modul Kuliah Pertemuan 05
                </div>
                <h4 class="font-bold text-white text-base">Unduh Materi Lengkap Bab 5 di Google Drive</h4>
                <p class="text-xs text-slate-300">Akses modul rangkaian aritmatika digital, Ripple Carry Adder, Half/Full Subtractor, dan latihan soal.</p>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/1Te2sSFBBPrb6WFt1o4sLoHi4uYsHKKeW" target="_blank" rel="noopener noreferrer" class="holo-btn-green w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-emerald-200 hover:text-white flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:scale-105 transition">
              <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
              <span>Buka Materi di Google Drive ↗</span>
            </a>
          </div>

          <!-- Tombol Kuis Mingguan (20 Soal) -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 class="font-bold text-white text-base">Uji Pemahaman: Kuis Pekan 5 (20 Soal)</h4>
              <p class="text-xs text-slate-400">Kerjakan 20 butir soal adder, subtractor, carry propagasi, gerbang logika, dan cetak sertifikat resmi.</p>
            </div>
            <button onclick="launchQuiz(5)" class="holo-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white whitespace-nowrap">
              Akses Kuis Pekan 5 (20 Soal)
            </button>
          </div>
        </div>

        <!-- ================= FITUR 1 SECTION ================= -->
        <div id="bab5_sec_fitur1" data-bab="5" class="hidden space-y-4">
          <div class="flex items-center justify-between">
            <button onclick="switchBabTab(5, 'beranda')" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 hover:border-emerald-500 transition">
              <span>← Kembali ke Beranda Materi</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="switchBabTab(5, 'fitur2')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                Ke Fitur 2 (Adder) ➔
              </button>
              <button onclick="switchBabTab(5, 'fitur3')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                Ke Fitur 3 (Subtractor) ➔
              </button>
            </div>
          </div>

          <!-- FITUR 1: KALKULATOR PENJUMLAHAN (CARRY) & PENGURANGAN (BORROW) BERSUSUN -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-emerald-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 mb-1">
                  <span>Fitur 1</span> • Aritmatika Bersusun
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-emerald-400 text-xl">➕</span> Kalkulator Penjumlahan (Carry) & Pengurangan (Borrow) Biner Bersusun ke Bawah
                </h3>
                <p class="text-xs text-slate-400">
                  Lengkap dengan fitur <strong>Auto-Convert Radiks</strong>! Masukkan bilangan dalam format Desimal, Oktal, Heksadesimal, atau Biner. Sistem otomatis mengonversi ke biner dan menampilkan perhitungan hitung bersusun ke bawah dengan baris carry/borrow di atas!
                </p>
              </div>
            </div>

            <!-- Kontrol Input & Operasi -->
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              
              <!-- Pilih Operasi -->
              <div class="sm:col-span-3 space-y-1">
                <label class="text-xs text-slate-400 block font-semibold">Operasi Aritmatika:</label>
                <select id="b5_op" onchange="runBab5Calc()" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-emerald-400 font-mono-code font-bold">
                  <option value="ADD">Penjumlahan (+ Metode Carry)</option>
                  <option value="SUB">Pengurangan (− Metode Borrow)</option>
                </select>
              </div>

              <!-- Input Bilangan A -->
              <div class="sm:col-span-4 space-y-1">
                <div class="flex justify-between items-center text-xs text-slate-400 font-semibold">
                  <span>Bilangan A:</span>
                  <select id="b5_base_a" onchange="runBab5Calc()" class="bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-cyan-300 font-mono-code">
                    <option value="10">Desimal</option>
                    <option value="2">Biner</option>
                    <option value="8">Oktal</option>
                    <option value="16">Heksa</option>
                  </select>
                </div>
                <input type="text" id="b5_val_a" value="27" oninput="runBab5Calc()" placeholder="Nilai A" class="w-full bg-slate-950 border border-cyan-500/40 rounded-xl p-2.5 text-sm text-cyan-300 font-mono-code font-bold focus:outline-none focus:border-cyan-400" />
              </div>

              <!-- Input Bilangan B -->
              <div class="sm:col-span-4 space-y-1">
                <div class="flex justify-between items-center text-xs text-slate-400 font-semibold">
                  <span>Bilangan B:</span>
                  <select id="b5_base_b" onchange="runBab5Calc()" class="bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-purple-300 font-mono-code">
                    <option value="10">Desimal</option>
                    <option value="2">Biner</option>
                    <option value="8">Oktal</option>
                    <option value="16">Heksa</option>
                  </select>
                </div>
                <input type="text" id="b5_val_b" value="14" oninput="runBab5Calc()" placeholder="Nilai B" class="w-full bg-slate-950 border border-purple-500/40 rounded-xl p-2.5 text-sm text-purple-300 font-mono-code font-bold focus:outline-none focus:border-purple-400" />
              </div>

              <!-- Tombol Hitung Ulang -->
              <div class="sm:col-span-1 pt-5">
                <button onclick="runBab5Calc()" class="w-full holo-btn-green py-2.5 rounded-xl text-xs font-bold text-white shadow" title="Hitung">
                  ✓
                </button>
              </div>

            </div>

            <!-- Konversi Otomatis Radiks Info Badge -->
            <div id="b5_autoconvert_badge" class="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-xs font-mono-code flex flex-wrap items-center justify-between gap-2">
            </div>

            <!-- Visualisasi Hitung Bersusun ke Bawah -->
            <div class="p-6 rounded-2xl bg-[#06080e] border border-cyan-500/30 font-mono-code text-center flex flex-col items-center justify-center space-y-2">
              <span class="text-xs text-slate-400 mb-1">Format Hitung Bersusun ke Bawah (Vertical Arithmetic):</span>
              <div id="b5_vertical_display" class="inline-block text-left text-sm sm:text-base font-bold tracking-widest bg-slate-950/90 p-5 rounded-2xl border border-slate-800 shadow-xl min-w-[280px]">
              </div>
            </div>

            <!-- Rincian Langkah Kolom demi Kolom -->
            <div id="b5_steps" class="text-xs text-slate-300 space-y-1 bg-slate-900/60 p-4 rounded-xl border border-slate-800 font-mono-code">
            </div>
          </div>
        </div>

        <!-- ================= FITUR 2 SECTION ================= -->
        <div id="bab5_sec_fitur2" data-bab="5" class="hidden space-y-4">
          <div class="flex items-center justify-between">
            <button onclick="switchBabTab(5, 'beranda')" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 hover:border-cyan-500 transition">
              <span>← Kembali ke Beranda Materi</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="switchBabTab(5, 'fitur1')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                ← Ke Fitur 1
              </button>
              <button onclick="switchBabTab(5, 'fitur3')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                Ke Fitur 3 (Subtractor) ➔
              </button>
            </div>
          </div>

          <!-- FITUR 2: TABEL KEBENARAN HALF ADDER & FULL ADDER + RANGKAIAN -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-cyan-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800 mb-1">
                  <span>Fitur 2</span> • Rangkaian Penjumlah
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-cyan-400 text-xl">∑</span> Tabel Kebenaran Half Adder & Full Adder + Diagram Skematik Gerbang
                </h3>
                <p class="text-xs text-slate-400">Pilih mode Half Adder atau Full Adder. Klik kolom output bernilai 1 untuk melihat persamaan Boolean dan gambar rangkaian gerbang logika yang dihasilkan!</p>
              </div>
            </div>

            <!-- Pilihan Mode Adder -->
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex gap-2 font-mono-code text-xs">
                <button id="b5_mode_HA" onclick="switchAdderMode('HA')" class="px-4 py-2 rounded-xl text-xs font-bold transition bg-cyan-600 text-white shadow">Half Adder (2-bit Input)</button>
                <button id="b5_mode_FA" onclick="switchAdderMode('FA')" class="px-4 py-2 rounded-xl text-xs font-bold transition bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">Full Adder (3-bit: A, B, Cin)</button>
              </div>
              <button onclick="resetAdderTableToStandard()" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono-code">
                Muat Nilai Standar Adder
              </button>
            </div>

            <!-- Tabel Kebenaran Adder Interaktif -->
            <div class="overflow-x-auto">
              <div id="adderTableContainer" class="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
              </div>
            </div>

            <!-- Persamaan Boolean Adder -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono-code text-xs">
              <div class="p-3.5 rounded-xl bg-slate-950 border border-cyan-500/20 space-y-1">
                <span class="text-cyan-400 font-bold block">Persamaan Output SUM (S):</span>
                <div id="adderSumEquation" class="text-sm font-bold text-white">S = A ⊕ B</div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/20 space-y-1">
                <span class="text-emerald-400 font-bold block">Persamaan Output CARRY (Cout):</span>
                <div id="adderCarryEquation" class="text-sm font-bold text-white">Cout = A · B</div>
              </div>
            </div>

            <!-- Gambar Skematik Rangkaian Adder -->
            <div class="space-y-2 pt-2 border-t border-slate-800">
              <span class="text-xs font-bold text-slate-300 block">Gambar Rangkaian Gerbang Logika Adder yang Dihasilkan:</span>
              <div id="adderSchematicContainer" class="p-4 rounded-2xl bg-[#06080e] border border-cyan-500/30 flex items-center justify-center overflow-x-auto min-h-[160px]">
              </div>
            </div>
          </div>
        </div>

        <!-- ================= FITUR 3 SECTION ================= -->
        <div id="bab5_sec_fitur3" data-bab="5" class="hidden space-y-4">
          <div class="flex items-center justify-between">
            <button onclick="switchBabTab(5, 'beranda')" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 hover:border-pink-500 transition">
              <span>← Kembali ke Beranda Materi</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="switchBabTab(5, 'fitur1')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                ← Ke Fitur 1
              </button>
              <button onclick="switchBabTab(5, 'fitur2')" class="px-3 py-1.5 rounded-lg text-xs font-mono-code text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
                ← Ke Fitur 2
              </button>
            </div>
          </div>

          <!-- FITUR 3: TABEL KEBENARAN HALF SUBTRACTOR & FULL SUBTRACTOR + RANGKAIAN -->
          <div class="holo-card p-6 sm:p-8 rounded-2xl space-y-6 border-pink-400/40">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 text-[10px] font-mono-code text-pink-400 bg-pink-950/60 px-2 py-0.5 rounded border border-pink-800 mb-1">
                  <span>Fitur 3</span> • Rangkaian Pengurang
                </div>
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span class="text-pink-400 text-xl">∆</span> Tabel Kebenaran Half Subtractor & Full Subtractor + Diagram Skematik Gerbang
                </h3>
                <p class="text-xs text-slate-400">Pilih mode Half Subtractor atau Full Subtractor. Klik kolom output bernilai 1 untuk melihat persamaan Difference, Borrow, dan gambar rangkaian gerbang logikanya!</p>
              </div>
            </div>

            <!-- Pilihan Mode Subtractor -->
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex gap-2 font-mono-code text-xs">
                <button id="b5_mode_HS" onclick="switchSubtractorMode('HS')" class="px-4 py-2 rounded-xl text-xs font-bold transition bg-pink-600 text-white shadow">Half Subtractor (2-bit)</button>
                <button id="b5_mode_FS" onclick="switchSubtractorMode('FS')" class="px-4 py-2 rounded-xl text-xs font-bold transition bg-slate-900 border border-slate-700 text-slate-300 hover:text-white">Full Subtractor (3-bit: A, B, Bin)</button>
              </div>
              <button onclick="resetSubtractorTableToStandard()" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono-code">
                Muat Nilai Standar Subtractor
              </button>
            </div>

            <!-- Tabel Kebenaran Subtractor Interaktif -->
            <div class="overflow-x-auto">
              <div id="subtractorTableContainer" class="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
              </div>
            </div>

            <!-- Persamaan Boolean Subtractor -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono-code text-xs">
              <div class="p-3.5 rounded-xl bg-slate-950 border border-pink-500/20 space-y-1">
                <span class="text-pink-400 font-bold block">Persamaan Output DIFFERENCE (D):</span>
                <div id="subtractorDiffEquation" class="text-sm font-bold text-white">D = A ⊕ B</div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-950 border border-purple-500/20 space-y-1">
                <span class="text-purple-400 font-bold block">Persamaan Output BORROW (Bout):</span>
                <div id="subtractorBorrowEquation" class="text-sm font-bold text-white">Bout = A' · B</div>
              </div>
            </div>

            <!-- Gambar Skematik Rangkaian Subtractor -->
            <div class="space-y-2 pt-2 border-t border-slate-800">
              <span class="text-xs font-bold text-slate-300 block">Gambar Rangkaian Gerbang Logika Subtractor yang Dihasilkan:</span>
              <div id="subtractorSchematicContainer" class="p-4 rounded-2xl bg-[#06080e] border border-cyan-500/30 flex items-center justify-center overflow-x-auto min-h-[160px]">
              </div>
            </div>
          </div>
        </div>
      `;

            runBab5Calc();
            switchAdderMode('HA');
            switchSubtractorMode('HS');
        }

        /* Logika Fitur 1: Aritmatika Bersusun ke Bawah */
        function runBab5Calc() {
            const op = document.getElementById('b5_op').value;
            const baseA = parseInt(document.getElementById('b5_base_a').value);
            const baseB = parseInt(document.getElementById('b5_base_b').value);
            const rawA = document.getElementById('b5_val_a').value.trim();
            const rawB = document.getElementById('b5_val_b').value.trim();
            const badge = document.getElementById('b5_autoconvert_badge');
            const display = document.getElementById('b5_vertical_display');
            const stepsDiv = document.getElementById('b5_steps');
            if (!display || !stepsDiv) return;

            const decA = parseInt(rawA, baseA);
            const decB = parseInt(rawB, baseB);

            if (isNaN(decA) || isNaN(decB) || decA < 0 || decB < 0) {
                display.innerHTML = '<span class="text-rose-400 text-xs">Masukkan angka bilangan positif yang valid untuk A dan B!</span>';
                stepsDiv.innerHTML = "";
                return;
            }

            const binA = decA.toString(2);
            const binB = decB.toString(2);
            const maxLen = Math.max(binA.length, binB.length);

            const padA = binA.padStart(maxLen, '0');
            const padB = binB.padStart(maxLen, '0');

            badge.innerHTML = `
        <div>
          <span>Input A: <code class="text-cyan-300">${rawA} (${baseA}) = ${decA}₁₀</code> ➔ <strong class="text-cyan-400">${binA}₂</strong></span>
          <span class="mx-2 text-slate-600">|</span>
          <span>Input B: <code class="text-purple-300">${rawB} (${baseB}) = ${decB}₁₀</code> ➔ <strong class="text-purple-400">${binB}₂</strong></span>
        </div>
        <span class="text-[11px] text-emerald-400 font-bold">Auto-Converted to Binary ✓</span>
      `;

            if (op === 'ADD') {
                // PENJUMLAHAN BERSUSUN DENGAN METODE CARRY
                let carry = 0;
                let sumBits = [];
                let carryRow = [];
                let stepLogs = [];

                for (let i = maxLen - 1; i >= 0; i--) {
                    const bitA = parseInt(padA[i]);
                    const bitB = parseInt(padB[i]);
                    const colSum = bitA + bitB + carry;
                    const outBit = colSum % 2;
                    const nextCarry = Math.floor(colSum / 2);

                    carryRow.unshift(carry); // carry yang masuk ke kolom ini
                    sumBits.unshift(outBit);

                    stepLogs.push(`Kolom bit-${maxLen - 1 - i}: ${bitA} + ${bitB} + carry_in(${carry}) = ${colSum} ➔ tulis ${outBit}, carry_out ${nextCarry}`);
                    carry = nextCarry;
                }

                if (carry > 0) {
                    sumBits.unshift(carry);
                    carryRow.unshift(carry);
                    padA.padStart(maxLen + 1, '0');
                }

                const carryStr = carryRow.map(c => c ? `<span class="text-amber-400 font-black">${c}</span>` : '<span class="text-slate-700">0</span>').join(' ');
                const finalSumStr = sumBits.join('');
                const finalDecSum = decA + decB;

                display.innerHTML = `
          <div class="space-y-1 font-mono-code">
            <div class="text-xs text-amber-400 tracking-wider">Carry : &nbsp;${carryStr}</div>
            <div class="text-cyan-300">A &nbsp; &nbsp; : &nbsp;${padA.split('').join(' ')} <span class="text-xs text-slate-500">(${decA})</span></div>
            <div class="text-purple-300 border-b-2 border-slate-600 pb-1">B (+) : &nbsp;${padB.split('').join(' ')} <span class="text-xs text-slate-500">(${decB})</span></div>
            <div class="text-emerald-400 text-lg pt-1">Hasil : &nbsp;${sumBits.join(' ')} <span class="text-xs text-slate-400">(${finalDecSum}₁₀)</span></div>
          </div>
        `;

                stepsDiv.innerHTML = `
          <div class="font-bold text-slate-200 mb-1">Rincian Penjumlahan Kolom per Kolom (Metode Carry):</div>
          ${stepLogs.map(s => `<div>• ${s}</div>`).join('')}
          <div class="pt-1 text-emerald-400 font-bold">Hasil Akhir: ${binA}₂ + ${binB}₂ = ${finalSumStr}₂ (${finalDecSum}₁₀)</div>
        `;
            } else {
                // PENGURANGAN BERSUSUN DENGAN METODE BORROW
                if (decA < decB) {
                    display.innerHTML = `
            <div class="p-3 text-rose-400 text-xs">
              <strong>Catatan Pengurangan:</strong> Nilai A (${decA}) lebih kecil daripada B (${decB}). Hasilnya bernilai negatif: -(${decB - decA}₁₀). Untuk representasi CPU biner negatif, gunakan format 2's Complement pada Bab 2.
            </div>
          `;
                    stepsDiv.innerHTML = "";
                    return;
                }

                let borrow = 0;
                let diffBits = [];
                let borrowRow = [];
                let stepLogs = [];

                for (let i = maxLen - 1; i >= 0; i--) {
                    const bitA = parseInt(padA[i]);
                    const bitB = parseInt(padB[i]);
                    let curDiff = bitA - borrow - bitB;
                    let nextBorrow = 0;

                    if (curDiff < 0) {
                        curDiff += 2;
                        nextBorrow = 1;
                    }

                    borrowRow.unshift(borrow);
                    diffBits.unshift(curDiff);
                    stepLogs.push(`Kolom bit-${maxLen - 1 - i}: ${bitA} - borrow(${borrow}) - ${bitB} = ${curDiff} (borrow_out ${nextBorrow})`);
                    borrow = nextBorrow;
                }

                const borrowStr = borrowRow.map(b => b ? `<span class="text-rose-400 font-black">${b}</span>` : '<span class="text-slate-700">0</span>').join(' ');
                const finalDiffStr = diffBits.join('').replace(/^0+(?!$)/, "") || '0';
                const finalDecDiff = decA - decB;

                display.innerHTML = `
          <div class="space-y-1 font-mono-code">
            <div class="text-xs text-rose-400 tracking-wider">Borrow: &nbsp;${borrowStr}</div>
            <div class="text-cyan-300">A &nbsp; &nbsp; : &nbsp;${padA.split('').join(' ')} <span class="text-xs text-slate-500">(${decA})</span></div>
            <div class="text-purple-300 border-b-2 border-slate-600 pb-1">B (−) : &nbsp;${padB.split('').join(' ')} <span class="text-xs text-slate-500">(${decB})</span></div>
            <div class="text-pink-400 text-lg pt-1">Hasil : &nbsp;${diffBits.join(' ')} <span class="text-xs text-slate-400">(${finalDecDiff}₁₀)</span></div>
          </div>
        `;

                stepsDiv.innerHTML = `
          <div class="font-bold text-slate-200 mb-1">Rincian Pengurangan Kolom per Kolom (Metode Borrow):</div>
          ${stepLogs.map(s => `<div>• ${s}</div>`).join('')}
          <div class="pt-1 text-pink-400 font-bold">Hasil Akhir: ${binA}₂ − ${binB}₂ = ${finalDiffStr}₂ (${finalDecDiff}₁₀)</div>
        `;
            }
        }

        /* State Fitur 2 & 3: Adder & Subtractor Interaktif */
        let currentAdderMode = 'HA'; // 'HA' atau 'FA'
        let currentSubtractorMode = 'HS'; // 'HS' atau 'FS'
        let adderTableData = {};
        let subtractorTableData = {};

        function switchAdderMode(mode) {
            currentAdderMode = mode;
            const bHA = document.getElementById('b5_mode_HA');
            const bFA = document.getElementById('b5_mode_FA');
            if (bHA && bFA) {
                if (mode === 'HA') {
                    bHA.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-cyan-600 text-white shadow";
                    bFA.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-slate-900 border border-slate-700 text-slate-300 hover:text-white";
                } else {
                    bFA.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-cyan-600 text-white shadow";
                    bHA.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-slate-900 border border-slate-700 text-slate-300 hover:text-white";
                }
            }
            resetAdderTableToStandard();
        }

        function resetAdderTableToStandard() {
            adderTableData = {};
            const rowCount = (currentAdderMode === 'HA') ? 4 : 8;
            for (let i = 0; i < rowCount; i++) {
                if (currentAdderMode === 'HA') {
                    const A = (i >> 1) & 1;
                    const B = i & 1;
                    adderTableData[i] = { S: A ^ B, C: A & B };
                } else {
                    const A = (i >> 2) & 1;
                    const B = (i >> 1) & 1;
                    const Cin = i & 1;
                    adderTableData[i] = { S: A ^ B ^ Cin, C: (A & B) | (Cin & (A ^ B)) };
                }
            }
            renderAdderTable();
        }

        function toggleAdderCell(rowIdx, col) {
            adderTableData[rowIdx][col] = adderTableData[rowIdx][col] ? 0 : 1;
            renderAdderTable();
        }

        function renderAdderTable() {
            const container = document.getElementById('adderTableContainer');
            const sumEqElem = document.getElementById('adderSumEquation');
            const carryEqElem = document.getElementById('adderCarryEquation');
            const schemElem = document.getElementById('adderSchematicContainer');
            if (!container) return;

            const isHA = (currentAdderMode === 'HA');
            const rowCount = isHA ? 4 : 8;

            let html = `
        <table class="w-full text-center font-mono-code text-xs border-collapse">
          <thead>
            <tr class="border-b border-slate-800 text-slate-400 bg-slate-900/50">
              <th class="p-2">A</th>
              <th class="p-2">B</th>
              ${!isHA ? '<th class="p-2 text-cyan-300 font-bold">Cin</th>' : ''}
              <th class="p-2 text-emerald-400 font-bold">SUM (S)</th>
              <th class="p-2 text-amber-400 font-bold">CARRY (Cout)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
      `;

            const sumOnes = [];
            const carryOnes = [];

            for (let i = 0; i < rowCount; i++) {
                const A = isHA ? ((i >> 1) & 1) : ((i >> 2) & 1);
                const B = isHA ? (i & 1) : ((i >> 1) & 1);
                const Cin = isHA ? 0 : (i & 1);

                const S = adderTableData[i] ? adderTableData[i].S : 0;
                const C = adderTableData[i] ? adderTableData[i].C : 0;

                if (S === 1) sumOnes.push(i);
                if (C === 1) carryOnes.push(i);

                html += `
          <tr class="hover:bg-slate-900/40 transition">
            <td class="p-2 ${A ? 'text-white font-bold' : 'text-slate-500'}">${A}</td>
            <td class="p-2 ${B ? 'text-white font-bold' : 'text-slate-500'}">${B}</td>
            ${!isHA ? `<td class="p-2 ${Cin ? 'text-white font-bold' : 'text-slate-500'}">${Cin}</td>` : ''}
            <td class="p-2">
              <button onclick="toggleAdderCell(${i}, 'S')" class="px-3.5 py-1 rounded font-bold text-xs transition ${S ? 'bg-emerald-500 text-slate-950 shadow-[0_0_10px_#10b981]' : 'bg-slate-900 border border-slate-700 text-slate-400'}">
                ${S}
              </button>
            </td>
            <td class="p-2">
              <button onclick="toggleAdderCell(${i}, 'C')" class="px-3.5 py-1 rounded font-bold text-xs transition ${C ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_#f59e0b]' : 'bg-slate-900 border border-slate-700 text-slate-400'}">
                ${C}
              </button>
            </td>
          </tr>
        `;
            }

            html += '</tbody></table>';
            container.innerHTML = html;

            // Update equations
            if (isHA) {
                sumEqElem.innerText = "S = A ⊕ B  [Σm(" + (sumOnes.join(',') || '-') + ")]";
                carryEqElem.innerText = "Cout = A · B  [Σm(" + (carryOnes.join(',') || '-') + ")]";
                if (schemElem) schemElem.innerHTML = renderHalfAdderSVG();
            } else {
                sumEqElem.innerText = "S = A ⊕ B ⊕ Cin  [Σm(" + (sumOnes.join(',') || '-') + ")]";
                carryEqElem.innerText = "Cout = AB + Cin(A ⊕ B) = AB + BCin + ACin";
                if (schemElem) schemElem.innerHTML = renderFullAdderSVG();
            }
        }

        function switchSubtractorMode(mode) {
            currentSubtractorMode = mode;
            const bHS = document.getElementById('b5_mode_HS');
            const bFS = document.getElementById('b5_mode_FS');
            if (bHS && bFS) {
                if (mode === 'HS') {
                    bHS.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-pink-600 text-white shadow";
                    bFS.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-slate-900 border border-slate-700 text-slate-300 hover:text-white";
                } else {
                    bFS.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-pink-600 text-white shadow";
                    bHS.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-slate-900 border border-slate-700 text-slate-300 hover:text-white";
                }
            }
            resetSubtractorTableToStandard();
        }

        function resetSubtractorTableToStandard() {
            subtractorTableData = {};
            const rowCount = (currentSubtractorMode === 'HS') ? 4 : 8;
            for (let i = 0; i < rowCount; i++) {
                if (currentSubtractorMode === 'HS') {
                    const A = (i >> 1) & 1;
                    const B = i & 1;
                    subtractorTableData[i] = { D: A ^ B, Bout: (!A) & B };
                } else {
                    const A = (i >> 2) & 1;
                    const B = (i >> 1) & 1;
                    const Bin = i & 1;
                    subtractorTableData[i] = { D: A ^ B ^ Bin, Bout: ((!A) & B) | (Bin & !(A ^ B)) };
                }
            }
            renderSubtractorTable();
        }

        function toggleSubtractorCell(rowIdx, col) {
            subtractorTableData[rowIdx][col] = subtractorTableData[rowIdx][col] ? 0 : 1;
            renderSubtractorTable();
        }

        function renderSubtractorTable() {
            const container = document.getElementById('subtractorTableContainer');
            const diffEqElem = document.getElementById('subtractorDiffEquation');
            const borrowEqElem = document.getElementById('subtractorBorrowEquation');
            const schemElem = document.getElementById('subtractorSchematicContainer');
            if (!container) return;

            const isHS = (currentSubtractorMode === 'HS');
            const rowCount = isHS ? 4 : 8;

            let html = `
        <table class="w-full text-center font-mono-code text-xs border-collapse">
          <thead>
            <tr class="border-b border-slate-800 text-slate-400 bg-slate-900/50">
              <th class="p-2">A</th>
              <th class="p-2">B</th>
              ${!isHS ? '<th class="p-2 text-pink-300 font-bold">Bin</th>' : ''}
              <th class="p-2 text-pink-400 font-bold">DIFFERENCE (D)</th>
              <th class="p-2 text-purple-400 font-bold">BORROW (Bout)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
      `;

            const diffOnes = [];
            const borrowOnes = [];

            for (let i = 0; i < rowCount; i++) {
                const A = isHS ? ((i >> 1) & 1) : ((i >> 2) & 1);
                const B = isHS ? (i & 1) : ((i >> 1) & 1);
                const Bin = isHS ? 0 : (i & 1);

                const D = subtractorTableData[i] ? subtractorTableData[i].D : 0;
                const Bout = subtractorTableData[i] ? subtractorTableData[i].Bout : 0;

                if (D === 1) diffOnes.push(i);
                if (Bout === 1) borrowOnes.push(i);

                html += `
          <tr class="hover:bg-slate-900/40 transition">
            <td class="p-2 ${A ? 'text-white font-bold' : 'text-slate-500'}">${A}</td>
            <td class="p-2 ${B ? 'text-white font-bold' : 'text-slate-500'}">${B}</td>
            ${!isHS ? `<td class="p-2 ${Bin ? 'text-white font-bold' : 'text-slate-500'}">${Bin}</td>` : ''}
            <td class="p-2">
              <button onclick="toggleSubtractorCell(${i}, 'D')" class="px-3.5 py-1 rounded font-bold text-xs transition ${D ? 'bg-pink-500 text-slate-950 shadow-[0_0_10px_#ec4899]' : 'bg-slate-900 border border-slate-700 text-slate-400'}">
                ${D}
              </button>
            </td>
            <td class="p-2">
              <button onclick="toggleSubtractorCell(${i}, 'Bout')" class="px-3.5 py-1 rounded font-bold text-xs transition ${Bout ? 'bg-purple-500 text-slate-950 shadow-[0_0_10px_#a855f7]' : 'bg-slate-900 border border-slate-700 text-slate-400'}">
                ${Bout}
              </button>
            </td>
          </tr>
        `;
            }

            html += '</tbody></table>';
            container.innerHTML = html;

            if (isHS) {
                diffEqElem.innerText = "D = A ⊕ B  [Σm(" + (diffOnes.join(',') || '-') + ")]";
                borrowEqElem.innerText = "Bout = A' · B  [Σm(" + (borrowOnes.join(',') || '-') + ")]";
                if (schemElem) schemElem.innerHTML = renderHalfSubtractorSVG();
            } else {
                diffEqElem.innerText = "D = A ⊕ B ⊕ Bin  [Σm(" + (diffOnes.join(',') || '-') + ")]";
                borrowEqElem.innerText = "Bout = A'B + Bin(A ⊕ B)' = A'B + A'Bin + BBin";
                if (schemElem) schemElem.innerHTML = renderFullSubtractorSVG();
            }
        }

        /* Diagram Skematik Adder & Subtractor SVG */
        function renderHalfAdderSVG() {
            return `
        <svg width="480" height="180" viewBox="0 0 480 180" class="select-none font-mono-code">
          <text x="30" y="45" fill="#00f5ff" font-weight="bold">Input A</text>
          <text x="30" y="115" fill="#a855f7" font-weight="bold">Input B</text>

          <line x1="100" y1="40" x2="200" y2="40" stroke="#00f5ff" stroke-width="2" />
          <line x1="130" y1="40" x2="130" y2="105" stroke="#00f5ff" stroke-width="2" />
          <line x1="130" y1="105" x2="200" y2="105" stroke="#00f5ff" stroke-width="2" />

          <line x1="100" y1="110" x2="160" y2="110" stroke="#a855f7" stroke-width="2" />
          <line x1="160" y1="110" x2="160" y2="60" stroke="#a855f7" stroke-width="2" />
          <line x1="160" y1="60" x2="200" y2="60" stroke="#a855f7" stroke-width="2" />
          <line x1="160" y1="110" x2="200" y2="125" stroke="#a855f7" stroke-width="2" />

          <!-- XOR (Sum) -->
          <g transform="translate(200, 25)">
            <path d="M-5,0 Q12,12 12,25 Q12,38 -5,50" fill="none" stroke="#ec4899" stroke-width="2" />
            <path d="M0,0 Q18,12 18,25 Q18,38 0,50 Q28,50 45,25 Q28,0 0,0 Z" fill="#0b1329" stroke="#ec4899" stroke-width="2" />
            <text x="18" y="29" fill="#ec4899" font-size="9" font-weight="bold">XOR</text>
          </g>
          <line x1="250" y1="50" x2="350" y2="50" stroke="#00ff88" stroke-width="2.5" />
          <text x="360" y="55" fill="#00ff88" font-size="12" font-weight="bold">SUM = A ⊕ B</text>

          <!-- AND (Carry) -->
          <g transform="translate(200, 95)">
            <path d="M0,0 L25,0 A20,20 0 0,1 25,40 L0,40 Z" fill="#0b1329" stroke="#00f5ff" stroke-width="2" />
            <text x="12" y="24" fill="#00f5ff" font-size="9" font-weight="bold">AND</text>
          </g>
          <line x1="250" y1="115" x2="350" y2="115" stroke="#f59e0b" stroke-width="2.5" />
          <text x="360" y="120" fill="#f59e0b" font-size="12" font-weight="bold">CARRY = A · B</text>
        </svg>
      `;
        }

        function renderFullAdderSVG() {
            return `
        <svg width="600" height="210" viewBox="0 0 600 210" class="select-none font-mono-code text-xs">
          <!-- Full Adder Block Diagram Representation -->
          <rect x="50" y="30" width="130" height="150" rx="14" fill="#090d16" stroke="#00f5ff" stroke-width="2" />
          <text x="65" y="55" fill="#00f5ff" font-weight="bold">Half Adder 1</text>
          <text x="65" y="85" fill="#94a3b8" font-size="10">In: A, B</text>
          <text x="65" y="115" fill="#ec4899" font-size="10">S1 = A ⊕ B</text>
          <text x="65" y="145" fill="#f59e0b" font-size="10">C1 = AB</text>

          <rect x="250" y="30" width="130" height="150" rx="14" fill="#090d16" stroke="#a855f7" stroke-width="2" />
          <text x="265" y="55" fill="#a855f7" font-weight="bold">Half Adder 2</text>
          <text x="265" y="85" fill="#94a3b8" font-size="10">In: S1, Cin</text>
          <text x="265" y="115" fill="#00ff88" font-size="10">S = S1 ⊕ Cin</text>
          <text x="265" y="145" fill="#f59e0b" font-size="10">C2 = S1 · Cin</text>

          <!-- OR Gate for Carry Out -->
          <g transform="translate(430, 115)">
            <path d="M0,0 Q18,12 18,25 Q18,38 0,50 Q28,50 45,25 Q28,0 0,0 Z" fill="#0b1329" stroke="#f59e0b" stroke-width="2" />
            <text x="16" y="30" fill="#f59e0b" font-size="10" font-weight="bold">OR</text>
          </g>

          <line x1="180" y1="110" x2="250" y2="110" stroke="#ec4899" stroke-width="2" />
          <line x1="380" y1="110" x2="490" y2="110" stroke="#00ff88" stroke-width="2.5" />
          <text x="500" y="115" fill="#00ff88" font-weight="bold">SUM (S)</text>

          <line x1="180" y1="140" x2="210" y2="140" stroke="#f59e0b" stroke-width="1.5" />
          <line x1="210" y1="140" x2="210" y2="185" stroke="#f59e0b" stroke-width="1.5" />
          <line x1="210" y1="185" x2="410" y2="185" stroke="#f59e0b" stroke-width="1.5" />
          <line x1="410" y1="185" x2="430" y2="150" stroke="#f59e0b" stroke-width="1.5" />

          <line x1="380" y1="140" x2="430" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <line x1="480" y1="140" x2="540" y2="140" stroke="#f59e0b" stroke-width="2.5" />
          <text x="550" y="145" fill="#f59e0b" font-weight="bold">Cout</text>
        </svg>
      `;
        }

        function renderHalfSubtractorSVG() {
            return `
        <svg width="480" height="180" viewBox="0 0 480 180" class="select-none font-mono-code">
          <text x="30" y="45" fill="#00f5ff" font-weight="bold">Input A</text>
          <text x="30" y="115" fill="#a855f7" font-weight="bold">Input B</text>

          <line x1="100" y1="40" x2="200" y2="40" stroke="#00f5ff" stroke-width="2" />
          <line x1="120" y1="40" x2="120" y2="105" stroke="#00f5ff" stroke-width="2" />
          <line x1="120" y1="105" x2="145" y2="105" stroke="#00f5ff" stroke-width="2" />

          <!-- NOT Inverter pada A untuk Borrow -->
          <g transform="translate(145, 95)">
            <path d="M0,0 L18,10 L0,20 Z" fill="#0b1329" stroke="#ec4899" stroke-width="1.5" />
            <circle cx="21" cy="10" r="2.5" fill="#0b1329" stroke="#ec4899" stroke-width="1.5" />
          </g>
          <line x1="170" y1="105" x2="200" y2="105" stroke="#ec4899" stroke-width="2" />

          <line x1="100" y1="110" x2="175" y2="110" stroke="#a855f7" stroke-width="2" />
          <line x1="175" y1="110" x2="175" y2="60" stroke="#a855f7" stroke-width="2" />
          <line x1="175" y1="60" x2="200" y2="60" stroke="#a855f7" stroke-width="2" />
          <line x1="175" y1="110" x2="200" y2="125" stroke="#a855f7" stroke-width="2" />

          <!-- XOR (Diff) -->
          <g transform="translate(200, 25)">
            <path d="M-5,0 Q12,12 12,25 Q12,38 -5,50" fill="none" stroke="#ec4899" stroke-width="2" />
            <path d="M0,0 Q18,12 18,25 Q18,38 0,50 Q28,50 45,25 Q28,0 0,0 Z" fill="#0b1329" stroke="#ec4899" stroke-width="2" />
            <text x="18" y="29" fill="#ec4899" font-size="9" font-weight="bold">XOR</text>
          </g>
          <line x1="250" y1="50" x2="350" y2="50" stroke="#00ff88" stroke-width="2.5" />
          <text x="360" y="55" fill="#00ff88" font-size="12" font-weight="bold">DIFF = A ⊕ B</text>

          <!-- AND (Borrow) -->
          <g transform="translate(200, 95)">
            <path d="M0,0 L25,0 A20,20 0 0,1 25,40 L0,40 Z" fill="#0b1329" stroke="#a855f7" stroke-width="2" />
            <text x="12" y="24" fill="#a855f7" font-size="9" font-weight="bold">AND</text>
          </g>
          <line x1="250" y1="115" x2="350" y2="115" stroke="#ec4899" stroke-width="2.5" />
          <text x="360" y="120" fill="#ec4899" font-size="12" font-weight="bold">BORROW = A' · B</text>
        </svg>
      `;
        }

        function renderFullSubtractorSVG() {
            return `
        <svg width="600" height="210" viewBox="0 0 600 210" class="select-none font-mono-code text-xs">
          <rect x="50" y="30" width="130" height="150" rx="14" fill="#090d16" stroke="#ec4899" stroke-width="2" />
          <text x="60" y="55" fill="#ec4899" font-weight="bold">Half Subtractor 1</text>
          <text x="65" y="85" fill="#94a3b8" font-size="10">In: A, B</text>
          <text x="65" y="115" fill="#00ff88" font-size="10">D1 = A ⊕ B</text>
          <text x="65" y="145" fill="#ec4899" font-size="10">B1 = A'B</text>

          <rect x="250" y="30" width="130" height="150" rx="14" fill="#090d16" stroke="#a855f7" stroke-width="2" />
          <text x="260" y="55" fill="#a855f7" font-weight="bold">Half Subtractor 2</text>
          <text x="265" y="85" fill="#94a3b8" font-size="10">In: D1, Bin</text>
          <text x="265" y="115" fill="#00ff88" font-size="10">D = D1 ⊕ Bin</text>
          <text x="265" y="145" fill="#ec4899" font-size="10">B2 = D1' · Bin</text>

          <!-- OR Gate for Borrow Out -->
          <g transform="translate(430, 115)">
            <path d="M0,0 Q18,12 18,25 Q18,38 0,50 Q28,50 45,25 Q28,0 0,0 Z" fill="#0b1329" stroke="#ec4899" stroke-width="2" />
            <text x="16" y="30" fill="#ec4899" font-size="10" font-weight="bold">OR</text>
          </g>

          <line x1="180" y1="110" x2="250" y2="110" stroke="#00ff88" stroke-width="2" />
          <line x1="380" y1="110" x2="490" y2="110" stroke="#00ff88" stroke-width="2.5" />
          <text x="500" y="115" fill="#00ff88" font-weight="bold">DIFF (D)</text>

          <line x1="180" y1="140" x2="210" y2="140" stroke="#ec4899" stroke-width="1.5" />
          <line x1="210" y1="140" x2="210" y2="185" stroke="#ec4899" stroke-width="1.5" />
          <line x1="210" y1="185" x2="410" y2="185" stroke="#ec4899" stroke-width="1.5" />
          <line x1="410" y1="185" x2="430" y2="150" stroke="#ec4899" stroke-width="1.5" />

          <line x1="380" y1="140" x2="430" y2="130" stroke="#ec4899" stroke-width="1.5" />
          <line x1="480" y1="140" x2="540" y2="140" stroke="#ec4899" stroke-width="2.5" />
          <text x="550" y="145" fill="#ec4899" font-weight="bold">Bout</text>
        </svg>
      `;
        }


        /* ==========================================================
           QUIZ DATA BANK: 20 SOAL PER PERTEMUAN (BAB 1 S.D. 5)
           Lengkap dengan Opsi Jawaban (Variatif A, B, C, D), Kunci Jawaban & Pembahasan
           ========================================================== */
        const QUIZ_DATA = {
            1: [
                {
                    q: "Manakah karakteristik utama yang membedakan sistem digital dari sistem analog?",
                    opt: ["Analog memiliki akurasi tanpa batas dalam transmisi jarak jauh", "Digital bekerja dengan sinyal diskrit (0 dan 1) serta lebih tahan derau (noise)", "Sistem digital hanya dapat digunakan pada jaringan komputer nirkabel", "Analog memproses bit biner lebih cepat dibanding diskrit"],
                    ans: 1,
                    exp: "Sistem digital merepresentasikan data dalam bentuk nilai diskrit (HIGH/1 dan LOW/0) sehingga memiliki toleransi terhadap derau jauh lebih tinggi dibanding analog."
                },
                {
                    q: "Berapa jumlah kemungkinan kombinasi nilai biner yang dapat dibentuk oleh data selebar 1 Byte (8 bit)?",
                    opt: ["128 kombinasi", "512 kombinasi", "1024 kombinasi", "256 kombinasi (2⁸)"],
                    ans: 3,
                    exp: "Data 8 bit memiliki 2⁸ = 256 kombinasi unik (dari 00000000₂ hingga 11111111₂, atau nilai desimal 0 hingga 255)."
                },
                {
                    q: "Konversikan bilangan desimal 175₁₀ ke dalam bentuk biner (Basis 2):",
                    opt: ["10101111₂", "10110001₂", "10100111₂", "11001101₂"],
                    ans: 0,
                    exp: "175 = 128 + 32 + 8 + 4 + 2 + 1 = 10101111₂."
                },
                {
                    q: "Bilangan heksadesimal 0x2F jika diubah ke bentuk desimal bernilai:",
                    opt: ["45₁₀", "32₁₀", "47₁₀", "54₁₀"],
                    ans: 2,
                    exp: "0x2F = (2 × 16¹) + (15 × 16⁰) = 32 + 15 = 47₁₀."
                },
                {
                    q: "Bilangan biner 110110111₂ jika dikelompokkan ke sistem bilangan oktal bernilai:",
                    opt: ["753₈", "667₈", "673₈", "567₈"],
                    ans: 1,
                    exp: "Kelompokkan tiap 3 bit dari kanan: [110][110][111]₂ = 6 6 7₈."
                },
                {
                    q: "Berapakah nilai desimal dari pecahan biner 0.101₂?",
                    opt: ["0.625₁₀", "0.525₁₀", "0.750₁₀", "0.375₁₀"],
                    ans: 0,
                    exp: "0.101₂ = (1 × 2⁻¹) + (0 × 2⁻²) + (1 × 2⁻³) = 0.5 + 0 + 0.125 = 0.625₁₀."
                },
                {
                    q: "Konversikan desimal pecahan 0.375₁₀ ke dalam bentuk biner:",
                    opt: ["0.101₂", "0.110₂", "0.001₂", "0.011₂"],
                    ans: 3,
                    exp: "0.375 × 2 = 0.75 (0), 0.75 × 2 = 1.5 (1), 0.5 × 2 = 1.0 (1) ➔ 0.011₂."
                },
                {
                    q: "Komponen manakah dalam otomotif modern yang merupakan contoh nyata penerapan sistem digital?",
                    opt: ["Radiator pendingin manual", "Kabel rem kawat", "Electronic Control Unit (ECU)", "Karburator murni"],
                    ans: 2,
                    exp: "ECU memproses sinyal sensor digital untuk mengendalikan injeksi bahan bakar, sistem ABS, dan waktu pengapian."
                },
                {
                    q: "Konversikan biner pecahan 101.11₂ ke bentuk desimal:",
                    opt: ["5.75₁₀", "5.50₁₀", "6.25₁₀", "5.375₁₀"],
                    ans: 0,
                    exp: "101₂ = 5₁₀ dan 0.11₂ = 2⁻¹ + 2⁻² = 0.5 + 0.25 = 0.75₁₀ ➔ 5.75₁₀."
                },
                {
                    q: "Berapakah representasi heksadesimal dari 11110000₂?",
                    opt: ["0x0F", "0xFF", "0xF0", "0xAA"],
                    ans: 2,
                    exp: "[1111][0000]₂ = F 0 ➔ 0xF0."
                },
                {
                    q: "Sistem bilangan oktal memiliki radiks sebesar:",
                    opt: ["Radiks 10", "Radiks 2", "Radiks 16", "Radiks 8"],
                    ans: 3,
                    exp: "Oktal menggunakan 8 simbol digit dasar (0 sampai 7)."
                },
                {
                    q: "Satu Nibble dalam sistem digital setara dengan:",
                    opt: ["8 bit", "4 bit", "2 bit", "16 bit"],
                    ans: 1,
                    exp: "1 Nibble = 4 bit biner (setara tepat 1 digit heksadesimal)."
                },
                {
                    q: "Konversikan bilangan oktal 75₈ ke bentuk desimal:",
                    opt: ["59₁₀", "63₁₀", "61₁₀", "55₁₀"],
                    ans: 2,
                    exp: "75₈ = (7 × 8¹) + (5 × 8⁰) = 56 + 5 = 61₁₀."
                },
                {
                    q: "Mengapa sistem transmisi digital 5G lebih unggul dibanding radio analog konvensional?",
                    opt: ["Menggunakan modulasi digital, kompresi, dan algoritma koreksi galat", "Bekerja tanpa gelombang elektromagnetik", "Tidak memerlukan antena pemancar", "Hanya mentransmisikan sinyal frekuensi rendah"],
                    ans: 0,
                    exp: "Sistem digital memanfaatkan teknik modulasi mutakhir, kompresi data, dan pendeteksi galat yang membuat data utuh."
                },
                {
                    q: "Nilai pecahan oktal 0.4₈ jika dinyatakan dalam desimal adalah:",
                    opt: ["0.4₁₀", "0.5₁₀", "0.25₁₀", "0.125₁₀"],
                    ans: 1,
                    exp: "0.4₈ = 4 × 8⁻¹ = 4 / 8 = 0.5₁₀."
                },
                {
                    q: "Pecahan biner 0.1111₂ setara dengan desimal:",
                    opt: ["0.8750₁₀", "0.9500₁₀", "0.8125₁₀", "0.9375₁₀"],
                    ans: 3,
                    exp: "0.1111₂ = 0.5 + 0.25 + 0.125 + 0.0625 = 0.9375₁₀."
                },
                {
                    q: "Konversikan heksadesimal 0xA3 ke biner:",
                    opt: ["10100011₂", "10110011₂", "10010011₂", "11100011₂"],
                    ans: 0,
                    exp: "A = 1010₂, 3 = 0011₂ ➔ 10100011₂."
                },
                {
                    q: "Alat pengubah sinyal suara mikrofon menjadi representasi data biner pada komputer disebut:",
                    opt: ["DAC (Digital to Analog Converter)", "Inverter", "ADC (Analog to Digital Converter)", "Oscillator"],
                    ans: 2,
                    exp: "ADC mengambil sampel kontinu dan mengonversinya menjadi angka biner diskrit."
                },
                {
                    q: "Nilai desimal 250₁₀ dalam bentuk heksadesimal adalah:",
                    opt: ["0xFB", "0xFA", "0xEA", "0xEE"],
                    ans: 1,
                    exp: "250 / 16 = 15 sisa 10 (A), 15 = F ➔ 0xFA."
                },
                {
                    q: "Pada bilangan biner berbobot posisi, digit paling kiri disebut:",
                    opt: ["LSB (Least Significant Bit)", "Parity Bit", "Stop Bit", "MSB (Most Significant Bit)"],
                    ans: 3,
                    exp: "MSB (Most Significant Bit) adalah bit dengan bobot perpangkatan 2 tertinggi."
                }
            ],
            2: [
                {
                    q: "Berapa rentang nilai desimal yang dapat direpresentasikan oleh format 8-bit Two's Complement (C2)?",
                    opt: ["-127 s.d. +127", "-256 s.d. +255", "-128 s.d. +127", "-128 s.d. +128"],
                    ans: 2,
                    exp: "Rentang n-bit 2's Complement adalah -2^(n-1) s.d. +(2^(n-1) - 1). Untuk 8-bit: -128 s.d. +127."
                },
                {
                    q: "Konversikan bilangan desimal -25₁₀ ke dalam bentuk 8-bit Two's Complement (C2):",
                    opt: ["11100111₂", "11100110₂", "10011001₂", "11011011₂"],
                    ans: 0,
                    exp: "+25 = 00011001₂. Komplemen 1 = 11100110₂. Tambah 1 = 11100111₂."
                },
                {
                    q: "Apakah kelemahan fatal metode Sign-Magnitude (MSB) dan 1's Complement yang diatasi oleh 2's Complement?",
                    opt: ["Tidak dapat menyimpan angka genap", "Hanya bisa digunakan pada komputer analog", "Memerlukan 32 bit setiap operasi", "Memiliki dua representasi nilai nol (+0 dan -0)"],
                    ans: 3,
                    exp: "Sign-Magnitude dan 1's Complement memiliki +0 dan -0 yang memboroskan kombinasi bit dan merumitkan sirkuit pembanding."
                },
                {
                    q: "Dalam 8-bit Sign-Magnitude, bagaimanakah representasi dari bilangan desimal -18₁₀?",
                    opt: ["11101101₂", "10010010₂", "11101110₂", "00010010₂"],
                    ans: 1,
                    exp: "18 = 0010010₂ (7-bit magnitude). Bit tanda negatif (MSB) = 1 ➔ 10010010₂."
                },
                {
                    q: "Berapakah nilai desimal dari biner 8-bit 11111100₂ jika diinterpretasikan sebagai 2's Complement?",
                    opt: ["-3₁₀", "-5₁₀", "-4₁₀", "+252₁₀"],
                    ans: 2,
                    exp: "MSB = 1 (negatif). Inversi bit: 00000011₂ + 1 = 00000100₂ = 4 ➔ bernilai -4₁₀."
                },
                {
                    q: "Berapa nilai desimal dari biner 8-bit 11111100₂ jika diinterpretasikan sebagai 1's Complement?",
                    opt: ["-4₁₀", "-5₁₀", "+252₁₀", "-3₁₀"],
                    ans: 3,
                    exp: "MSB = 1 (negatif). Balik bit: 00000011₂ = 3 ➔ bernilai -3₁₀."
                },
                {
                    q: "Bagaimanakah rumus operasi pengurangan A - B diselesaikan di dalam ALU modern berbasis 2's Complement?",
                    opt: ["A + (C2 dari B)", "A - (C1 dari B)", "(C1 dari A) + B", "(C2 dari A) - B"],
                    ans: 0,
                    exp: "ALU mengubah pengurangan menjadi penjumlahan: A - B = A + (-B) = A + (C2 dari B)."
                },
                {
                    q: "Kondisi Overflow pada penjumlahan dua bilangan bertanda 2's Complement terjadi apabila:",
                    opt: ["Hasil penjumlahan bernilai 0", "Penjumlahan dua bilangan bertanda sama menghasilkan tanda yang berlawanan", "Carry keluar bernilai 0", "Dua bilangan negatif menghasilkan nilai negatif"],
                    ans: 1,
                    exp: "Overflow terjadi jika dua positif dijumlahkan menghasilkan negatif, atau dua negatif menghasilkan positif."
                },
                {
                    q: "Berapakah rentang nilai desimal untuk 4-bit Two's Complement?",
                    opt: ["-7 s.d. +7", "-16 s.d. +15", "-8 s.d. +8", "-8 s.d. +7"],
                    ans: 3,
                    exp: "Rentang 4-bit C2: -2³ s.d. +(2³ - 1) = -8 s.d. +7."
                },
                {
                    q: "Konversikan desimal -1₁₀ ke bentuk 8-bit 2's Complement:",
                    opt: ["11111111₂ (0xFF)", "10000001₂", "11111110₂", "10000000₂"],
                    ans: 0,
                    exp: "+1 = 00000001₂. C1 = 11111110₂. C2 = 11111111₂ (0xFF)."
                },
                {
                    q: "Berapa representasi heksadesimal dari bilangan -50₁₀ dalam format 8-bit 2's Complement?",
                    opt: ["0xCD", "0xCE", "0xBE", "0xDE"],
                    ans: 1,
                    exp: "50 = 00110010₂. C1 = 11001101₂. C2 = 11001110₂ = 0xCE."
                },
                {
                    q: "Jika biner 8-bit adalah 01100100₂, apakah tanda dari bilangan ini dan berapa nilai desimalnya?",
                    opt: ["Negatif (-), bernilai -100₁₀", "Negatif (-), bernilai -28₁₀", "Positif (+), bernilai +100₁₀", "Positif (+), bernilai +64₁₀"],
                    ans: 2,
                    exp: "MSB = 0 menandakan bilangan positif. 01100100₂ = 64 + 32 + 4 = 100₁₀."
                },
                {
                    q: "Pada 16-bit Two's Complement, berapakah nilai desimal terkecil (paling negatif) yang dapat disimpan?",
                    opt: ["-32768₁₀", "-32767₁₀", "-65536₁₀", "-16384₁₀"],
                    ans: 0,
                    exp: "Nilai minimum 16-bit C2: -2¹⁵ = -32768₁₀."
                },
                {
                    q: "Berapakah nilai desimal dari biner 4-bit 1000₂ dalam Two's Complement?",
                    opt: ["-0₁₀", "+8₁₀", "-7₁₀", "-8₁₀"],
                    ans: 3,
                    exp: "1000₂ pada 4-bit C2 adalah nilai batas paling negatif: -2³ = -8₁₀."
                },
                {
                    q: "Apakah yang dimaksud dengan MSB (Most Significant Bit) pada bilangan bertanda?",
                    opt: ["Bit paling kanan penentu bilangan ganjil/genap", "Bit paritas pemeriksa kesalahan", "Bit paling kiri yang berfungsi menentukan tanda bilangan (+ atau -)", "Bit pembatas koma desimal"],
                    ans: 2,
                    exp: "MSB adalah bit posisi tertinggi paling kiri yang bernilai 0 untuk positif dan 1 untuk negatif."
                },
                {
                    q: "Ubahlah bilangan heksadesimal bertanda 8-bit 0x81 ke desimal dalam sistem Two's Complement:",
                    opt: ["-1₁₀", "-127₁₀", "-128₁₀", "+129₁₀"],
                    ans: 1,
                    exp: "0x81 = 10000001₂. Nilai desimal C2: 129 - 256 = -127₁₀."
                },
                {
                    q: "Mengapa komplemen 2 (C2) lebih disukai dibanding komplemen 1 (C1) dalam perancangan prosesor?",
                    opt: ["C2 hanya memiliki satu nilai nol dan tidak membutuhkan koreksi end-around carry", "C2 membutuhkan bit memori lebih sedikit", "C1 tidak mendukung operasi perkalian", "C1 menghasilkan bilangan pecahan"],
                    ans: 0,
                    exp: "C2 menyederhanakan rangkaian aritmatika adder karena tidak perlu penambahan end-around carry dan bebas dari representasi nol ganda."
                },
                {
                    q: "Konversikan -128₁₀ ke dalam 8-bit Two's Complement:",
                    opt: ["01111111₂", "11111111₂", "10000000₂", "10000001₂"],
                    ans: 2,
                    exp: "Nilai batas -128₁₀ dalam 8-bit C2 direpresentasikan secara unik oleh 10000000₂."
                },
                {
                    q: "Dalam sistem 4-bit Sign-Magnitude, biner 1101₂ merepresentasikan nilai desimal:",
                    opt: ["-3₁₀", "+13₁₀", "-6₁₀", "-5₁₀"],
                    ans: 3,
                    exp: "MSB = 1 (tanda negatif). Sisa 3 bit adalah 101₂ = 5 ➔ bernilai -5₁₀."
                },
                {
                    q: "Apakah hasil penjumlahan 8-bit bertanda: (+70) + (+80) dalam Two's Complement?",
                    opt: ["Normal menghasilkan +150", "Terjadi Overflow (karena 150 > +127)", "Menghasilkan -150", "Menghasilkan 0"],
                    ans: 1,
                    exp: "Batas positif 8-bit C2 adalah +127. Nilai 150 melebihi kapasitas dan menyebabkan overflow ke wilayah negatif."
                }
            ],
            3: [
                {
                    q: "Berdasarkan Hukum De Morgan, ekspresi (A · B)' ekuivalen secara identik dengan:",
                    opt: ["A' · B'", "(A + B)'", "A + B", "A' + B'"],
                    ans: 3,
                    exp: "Hukum De Morgan pertama menyatakan bahwa inversi dari perkalian (NAND) setara dengan penjumlahan inversi literal: (A · B)' = A' + B'."
                },
                {
                    q: "Hukum Absorpsi dalam aljabar Boolean menyatakan bahwa bentuk A + AB sama dengan:",
                    opt: ["B", "A", "AB", "A + B"],
                    ans: 1,
                    exp: "A + AB = A(1 + B) = A(1) = A."
                },
                {
                    q: "Gerbang logika manakah yang menghasilkan output bernilai 1 jika dan hanya jika kedua inputnya BERBEDA?",
                    opt: ["XNOR (Equivalence)", "NAND", "XOR (Exclusive OR)", "OR"],
                    ans: 2,
                    exp: "Gerbang XOR menghasilkan 1 jika salah satu input 1 tetapi tidak keduanya (0 ⊕ 1 = 1, 1 ⊕ 0 = 1, 0 ⊕ 0 = 0, 1 ⊕ 1 = 0)."
                },
                {
                    q: "Mengapa gerbang NAND dan NOR disebut sebagai 'Gerbang Logika Universal'?",
                    opt: ["Karena dapat digunakan untuk mengimplementasikan seluruh fungsi logika dasar apa pun", "Karena harganya paling murah di pasaran", "Karena bekerja pada semua frekuensi clock", "Karena memiliki lebih dari 8 pin input"],
                    ans: 0,
                    exp: "Setiap gerbang logika dasar (NOT, AND, OR, XOR) dapat dibangun secara murni hanya dengan kombinasi gerbang NAND saja atau NOR saja."
                },
                {
                    q: "Sederhanakan ekspresi Boolean: F = A · A' + B · 1",
                    opt: ["A + B", "B", "0", "1"],
                    ans: 1,
                    exp: "A · A' = 0 (Hukum Inversi). B · 1 = B (Hukum Identitas). Maka 0 + B = B."
                },
                {
                    q: "Manakah ekspresi kanonik SOP (Sum of Products) untuk fungsi dengan minterm m1 dan m3 pada variabel A dan B?",
                    opt: ["AB' + AB", "(A+B')(A'+B')", "A'B' + AB", "A'B + AB"],
                    ans: 3,
                    exp: "m1 = A'B (01₂), m3 = AB (11₂). Maka bentuk SOP = A'B + AB."
                },
                {
                    q: "Penyederhanaan dari A'B + AB adalah:",
                    opt: ["A", "A'", "B", "1"],
                    ans: 2,
                    exp: "A'B + AB = (A' + A)B = (1)B = B."
                },
                {
                    q: "Hukum Dominansi (Anihilasi) menyatakan bahwa:",
                    opt: ["A · 0 = 0 dan A + 1 = 1", "A · 1 = A dan A + 0 = A", "A · A = A", "A + A' = 1"],
                    ans: 0,
                    exp: "Input 0 pada AND mendominasi hasil menjadi 0; input 1 pada OR mendominasi hasil menjadi 1."
                },
                {
                    q: "Simbol skematik gerbang logika yang berbentuk segitiga dengan lingkaran kecil (bubble) di ujungnya adalah:",
                    opt: ["AND", "OR", "BUFFER", "NOT (Inverter)"],
                    ans: 3,
                    exp: "Gerbang NOT dilambangkan dengan segitiga dan bulatan pembalik (bubble) pada outputnya."
                },
                {
                    q: "Pada tabel kebenaran 3 input (A, B, C), berapa jumlah total kombinasi baris yang terbentuk?",
                    opt: ["6 baris", "16 baris", "8 baris (2³)", "4 baris"],
                    ans: 2,
                    exp: "Jumlah baris tabel kebenaran untuk n input adalah 2^n. Untuk 3 variabel: 2³ = 8 baris."
                },
                {
                    q: "Hukum Distributif perkalian terhadap penjumlahan dituliskan sebagai:",
                    opt: ["A(B + C) = AB + AC", "A + BC = AB + AC", "(A + B)C = ABC", "A(BC) = AB + C"],
                    ans: 0,
                    exp: "A(B + C) = AB + AC."
                },
                {
                    q: "Berapakah output dari gerbang XNOR dengan input A = 1 dan B = 1?",
                    opt: ["0 (LOW)", "1 (HIGH)", "High Impedance", "Tak tentu"],
                    ans: 1,
                    exp: "Gerbang XNOR menghasilkan 1 jika kedua inputnya sama. Karena A=B=1, output = 1."
                },
                {
                    q: "Bentuk Product of Sums (POS) dibentuk berdasarkan baris tabel kebenaran yang bernilai:",
                    opt: ["Output = 1 (Minterm)", "Don't care", "Output = 0 (Maxterm)", "Input ganjil"],
                    ans: 2,
                    exp: "POS (Product of Sums) dibangun dari suku-suku Maxterm yang menghasilkan output bernilai 0."
                },
                {
                    q: "Sederhanakan ekspresi Boolean: Y = A + A'B",
                    opt: ["AB", "A + B", "A' + B", "B"],
                    ans: 1,
                    exp: "A + A'B = (A + A')(A + B) = (1)(A + B) = A + B."
                },
                {
                    q: "Siapakah ilmuwan yang pertama kali menerapkan aljabar Boolean pada sirkuit pensaklaran relay digital pada tahun 1938?",
                    opt: ["Alan Turing", "John von Neumann", "Maurice Karnaugh", "Claude Shannon"],
                    ans: 3,
                    exp: "Claude Shannon dalam tesis magisternya di MIT (1938) membuktikan aljabar Boolean dapat merancang sirkuit sakelar digital."
                },
                {
                    q: "Gerbang NAND dua input akan menghasilkan output LOW (0) hanya ketika:",
                    opt: ["Kedua inputnya bernilai HIGH (1)", "Salah satu input bernilai LOW (0)", "Kedua input bernilai LOW (0)", "Input A = 0 dan B = 1"],
                    ans: 0,
                    exp: "NAND adalah kebalikan AND. AND menghasilkan 1 saat 1·1, sehingga NAND menghasilkan 0 hanya saat 1·1."
                },
                {
                    q: "Hukum Idempoten menyatakan bahwa:",
                    opt: ["A · 1 = A", "A · A = A dan A + A = A", "A · 0 = 0", "A + A' = 1"],
                    ans: 1,
                    exp: "Idempoten bermakna operasi dengan dirinya sendiri tidak mengubah nilai logika (A·A = A, A+A = A)."
                },
                {
                    q: "Jika persamaan logika adalah Y = (A + B)', rangkaian gerbang logika yang merepresentasikannya adalah:",
                    opt: ["Gerbang NOR", "Gerbang NAND", "Gerbang XOR", "Gerbang AND"],
                    ans: 0,
                    exp: "Y = (A + B)' adalah persamaan standar gerbang NOR (NOT-OR)."
                },
                {
                    q: "Tingkat rangkaian logika dua tingkat standar (Two-Level Logic) untuk bentuk SOP terdiri atas:",
                    opt: ["Tingkat 1 gerbang OR, Tingkat 2 gerbang AND", "Dua tingkat gerbang NOT", "Tingkat 1 gerbang AND, Tingkat 2 gerbang OR", "Tingkat 1 gerbang XOR, Tingkat 2 gerbang XNOR"],
                    ans: 2,
                    exp: "SOP (Sum of Products) membentuk perkalian di tingkat 1 (AND) lalu menjumlahkannya di tingkat 2 (OR)."
                },
                {
                    q: "Hukum Involusi (Komplemen Ganda) menyatakan:",
                    opt: ["A · A' = 0", "A + A' = 1", "A · 0 = 0", "(A')' = A"],
                    ans: 3,
                    exp: "Pembalikan dua kali dari suatu variabel logika akan mengembalikan variabel tersebut ke nilai aslinya."
                }
            ],
            4: [
                {
                    q: "Mengapa urutan kolom dan baris pada Peta Karnaugh (K-Map) harus disusun dalam Kode Gray (00, 01, 11, 10)?",
                    opt: ["Agar sel-sel bersebelahan hanya berbeda tepat 1 bit untuk memungkinkan penyederhanaan", "Agar nilainya berurutan sesuai biner standar", "Untuk menghemat area cetak sirkuit PCB", "Agar fungsi POS tidak perlu dihitung"],
                    ans: 0,
                    exp: "Kode Gray menjamin jarak Hamming = 1 antar sel bertetangga, sehingga suku A + A' = 1 dapat dieliminasi secara visual."
                },
                {
                    q: "Berapa banyak sel yang terdapat pada K-Map dengan 4 variabel input (A, B, C, D)?",
                    opt: ["8 sel", "32 sel", "16 sel (2⁴)", "4 sel"],
                    ans: 2,
                    exp: "K-Map 4 variabel memiliki 2⁴ = 16 sel yang disusun dalam kisi matriks 4 × 4."
                },
                {
                    q: "Berapakah ukuran kelompok penggabungan sel (grouping) yang DIPERBOLEHKAN pada K-Map?",
                    opt: ["3, 5, 6, 9 sel", "1, 2, 4, 8, 16, 32 sel (kelipatan 2ⁿ)", "Semua angka genap", "Hanya kelompok 4 sel"],
                    ans: 1,
                    exp: "Pengelompokan K-Map harus selalu berupa perpangkatan dua: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32."
                },
                {
                    q: "Jika sebuah kelompok (loop) pada K-Map 4 variabel berukuran 8 sel berhasil dibentuk, berapakah jumlah literal variabel yang tersisa pada suku produk tersebut?",
                    opt: ["2 literal variabel", "3 literal variabel", "4 literal variabel", "1 literal variabel"],
                    ans: 3,
                    exp: "Setiap penggandaan ukuran kelompok mengeliminasi 1 variabel: 4 - log₂(8) = 4 - 3 = 1 literal variabel."
                },
                {
                    q: "Bagaimanakah penanganan kondisi Don't Care (X) pada saat melakukan pengelompokan K-Map?",
                    opt: ["Wajib selalu dimasukkan ke dalam kelompok", "Harus selalu dianggap bernilai 0", "Dapat dianggap bernilai 1 jika memperbesar kelompok, atau diabaikan (0) jika tidak membantu", "Menyebabkan rangkaian logika error"],
                    ans: 2,
                    exp: "Kondisi Don't Care (X) fleksibel: dimanfaatkan sebagai 1 untuk memperbesar loop atau diabaikan jika tidak diperlukan."
                },
                {
                    q: "Apakah yang dimaksud dengan aturan 'Wrapping' (Pembungkusan) pada K-Map?",
                    opt: ["Sel di tepi kiri terhubung dengan tepi kanan, dan baris atas terhubung dengan baris bawah", "Sel di tengah tidak boleh dihubungkan", "Pengelompokan berbentuk diagonal", "K-Map dilipat menjadi sirkuit 3D"],
                    ans: 0,
                    exp: "Topologi K-Map membentuk torus (silinder berputar) di mana ujung kiri bertemu kanan, dan ujung atas bertemu bawah."
                },
                {
                    q: "Pada K-Map 4 variabel, gabungan 4 sel di empat sudut peta (m0, m2, m8, m10) menyederhanakan persamaan menjadi:",
                    opt: ["A'C'", "BD", "A'D'", "B'D'"],
                    ans: 3,
                    exp: "m0(0000), m2(0010), m8(1000), m10(1010). Variabel A dan C berubah (tereliminasi), menyisakan B=0 dan D=0 ➔ B'D'."
                },
                {
                    q: "Apakah definisi dari Essential Prime Implicant (EPI)?",
                    opt: ["Kelompok yang berukuran paling kecil", "Prime Implicant yang menutupi setidaknya satu minterm yang tidak tercakup oleh PI lainnya", "Kelompok yang hanya berisi angka 0", "Kelompok yang berisi kondisi don't care saja"],
                    ans: 1,
                    exp: "EPI adalah kelompok yang wajib dipilih dalam hasil penyederhanaan karena memiliki minterm eksklusif."
                },
                {
                    q: "Berapa banyak sel yang terdapat pada K-Map dengan 5 variabel input (A, B, C, D, E)?",
                    opt: ["32 sel (2⁵)", "16 sel", "64 sel", "25 sel"],
                    ans: 0,
                    exp: "K-Map 5 variabel memiliki 2⁵ = 32 sel, yang biasanya digambarkan sebagai dua subkisi 4×4 (A=0 dan A=1)."
                },
                {
                    q: "Jika seluruh 16 sel pada K-Map 4 variabel bernilai 1, maka hasil persamaannya adalah:",
                    opt: ["Q = 0", "Q = ABCD", "Q = A + B + C + D", "Q = 1"],
                    ans: 3,
                    exp: "Jika seluruh sel bernilai 1, semua variabel tereliminasi dan output selalu bernilai konstan 1 (Tautologi)."
                },
                {
                    q: "Jika seluruh sel pada K-Map bernilai 0, maka hasil fungsi logikanya adalah:",
                    opt: ["Q = 1", "Q = A'B'C'D'", "Q = 0", "Q = Tak tentu"],
                    ans: 2,
                    exp: "Fungsi selalu menghasilkan nilai LOW (0) pada semua kombinasi masukan."
                },
                {
                    q: "Pada K-Map 3 variabel, minterm m0, m1, m2, m3 membentuk satu kelompok 4 sel. Persamaan sederhananya adalah:",
                    opt: ["A", "A'", "BC", "B'"],
                    ans: 1,
                    exp: "m0(000), m1(001), m2(010), m3(011). Pada keempat sel ini, A selalu bernilai 0, sedangkan B dan C berubah ➔ A'."
                },
                {
                    q: "Notasi F = Σm(1, 3, 5, 7) menunjukkan bentuk persamaan:",
                    opt: ["POS (Product of Sums / Maxterm)", "Aljabar Komutatif", "Inversi", "SOP (Sum of Products / Minterm)"],
                    ans: 3,
                    exp: "Simbol Σm menunjukkan penjumlahan suku-suku minterm (SOP)."
                },
                {
                    q: "Notasi F = ΠM(0, 2, 4, 6) menunjukkan bentuk persamaan:",
                    opt: ["SOP (Sum of Products / Minterm)", "POS (Product of Sums / Maxterm)", "Hukum De Morgan", "Karnaugh"],
                    ans: 1,
                    exp: "Simbol ΠM menunjukkan perkalian suku-suku maxterm (POS)."
                },
                {
                    q: "Algoritma tabular yang identik dengan K-Map untuk variabel banyak (> 5) adalah:",
                    opt: ["Algoritma Quine-McCluskey", "Algoritma Dijkstra", "Algoritma Prim", "Algoritma Bubble Sort"],
                    ans: 0,
                    exp: "Metode Quine-McCluskey adalah algoritma minimasi fungsi Boolean tabular yang dapat diprogram secara komputasi."
                },
                {
                    q: "Pengelompokan sel secara diagonal pada K-Map:",
                    opt: ["Dianjurkan untuk menghemat gerbang", "Boleh jika berjumlah genap", "TIDAK DIPERBOLEHKAN", "Hanya berlaku pada K-Map 5 variabel"],
                    ans: 2,
                    exp: "Pengelompokan K-Map harus selalu horizontal atau vertikal membentuk persegi panjang/bujursangkar, diagonal tidak valid."
                },
                {
                    q: "Pada K-Map 2 variabel (A, B), berapakah nilai sel m2?",
                    opt: ["A = 0, B = 1", "A = 1, B = 0", "A = 1, B = 1", "A = 0, B = 0"],
                    ans: 1,
                    exp: "2₁₀ dalam biner 2-bit adalah 10₂ (A = 1, B = 0)."
                },
                {
                    q: "Jika terdapat kelompok sel 2 pada K-Map 4 variabel, berapa literal yang dihasilkan?",
                    opt: ["2 literal variabel", "1 literal variabel", "4 literal variabel", "3 literal variabel"],
                    ans: 3,
                    exp: "Kelompok 2 sel mengeliminasi 1 variabel dari total 4 variabel: 4 - log₂(2) = 3 literal variabel."
                },
                {
                    q: "Dalam K-Map 5 variabel, sel m1 dan sel m17 dapat dikelompokkan karena:",
                    opt: ["Keduanya bilangan ganjil", "Keduanya memiliki nilai 1", "Keduanya berada pada posisi fisik yang sama di kisi A=0 dan A=1 (hanya berbeda variabel A)", "Berasal dari produsen IC yang sama"],
                    ans: 2,
                    exp: "m1 (00001₂) dan m17 (10001₂) hanya berbeda pada bit A, sehingga bertetangga pada dimensi ke-5."
                },
                {
                    q: "Tujuan utama menyederhanakan fungsi logika dengan K-Map dalam industri semikonduktor adalah:",
                    opt: ["Mengurangi jumlah gerbang transistor, menekan konsumsi daya, dan mempercepat respons sirkuit", "Mengubah IC digital menjadi IC analog", "Membuat rangkaian bekerja tanpa tegangan listrik", "Meningkatkan panas prosesor"],
                    ans: 0,
                    exp: "Penyederhanaan meminimalkan jumlah komponen, menghemat luas silikon chip, dan mengurangi delay propagasi."
                }
            ],
            5: [
                {
                    q: "Berapakah jumlah bit input dan bit output pada sebuah rangkaian Half Adder (HA)?",
                    opt: ["3 input dan 2 output", "2 input dan 1 output", "2 input (A, B) dan 2 output (Sum, Carry)", "4 input dan 2 output"],
                    ans: 2,
                    exp: "Half Adder memiliki 2 input (A dan B) serta menghasilkan 2 output: Sum (S) dan Carry (C)."
                },
                {
                    q: "Persamaan logika Boolean untuk output SUM (S) dan CARRY (C) pada Half Adder adalah:",
                    opt: ["S = A · B ; C = A + B", "S = A + B ; C = A ⊕ B", "S = A'B ; C = AB'", "S = A ⊕ B ; C = A · B"],
                    ans: 3,
                    exp: "Output SUM menggunakan gerbang XOR (A ⊕ B), sedangkan CARRY menggunakan gerbang AND (A · B)."
                },
                {
                    q: "Rangkaian Full Adder (FA) dapat dibangun dari kombinasi komponen:",
                    opt: ["2 Half Adder dan 1 Gerbang OR", "2 Gerbang AND dan 1 Gerbang NOT", "3 Gerbang XOR saja", "1 Half Adder dan 2 Gerbang OR"],
                    ans: 0,
                    exp: "Sebuah Full Adder tersusun atas dua rangkaian Half Adder dan satu gerbang OR untuk menggabungkan Carry."
                },
                {
                    q: "Pada Full Adder dengan input A = 1, B = 1, dan Cin = 1, berapakah nilai output Sum (S) dan Cout?",
                    opt: ["Sum = 0, Cout = 1", "Sum = 1, Cout = 1", "Sum = 1, Cout = 0", "Sum = 0, Cout = 0"],
                    ans: 1,
                    exp: "1 + 1 + 1 = 3₁₀ = 11₂ ➔ Sum = 1 dan Carry_out = 1."
                },
                {
                    q: "Apakah keterbatasan utama dari Half Adder sehingga tidak dapat digunakan sendirian untuk menjumlahkan angka biner multibit?",
                    opt: ["Hanya bisa menjumlahkan bilangan negatif", "Tidak memiliki output Carry", "Terlalu lambat dibanding Full Adder", "Tidak memiliki input Carry-in (Cin) dari kolom sebelumnya"],
                    ans: 3,
                    exp: "Half Adder hanya menerima 2 input, tidak memiliki masukan Carry dari kolom bit yang lebih rendah."
                },
                {
                    q: "Persamaan Boolean untuk output DIFFERENCE (D) dan BORROW (Bout) pada Half Subtractor adalah:",
                    opt: ["D = A · B ; Bout = A ⊕ B", "D = A ⊕ B ; Bout = A · B'", "D = A ⊕ B ; Bout = A' · B", "D = A + B ; Bout = A'B"],
                    ans: 2,
                    exp: "Difference adalah A ⊕ B, dan Borrow membutuhkan inverter pada bit A: Bout = A' · B."
                },
                {
                    q: "Pada Half Subtractor, jika input A = 0 dan B = 1, berapakah nilai Difference (D) dan Borrow (Bout)?",
                    opt: ["D = 0, Bout = 1", "D = 1, Bout = 1", "D = 1, Bout = 0", "D = 0, Bout = 0"],
                    ans: 1,
                    exp: "0 - 1 membutuhkan pinjaman (borrow = 1), sehingga (2 + 0) - 1 = 1 (Difference = 1)."
                },
                {
                    q: "Rangkaian penambah biner n-bit yang menghubungkan Carry-out suatu tahap ke Carry-in tahap berikutnya disebut:",
                    opt: ["Ripple Carry Adder (RCA)", "Carry Lookahead Adder (CLA)", "Half Adder Serial", "Multiplexer Adder"],
                    ans: 0,
                    exp: "Ripple Carry Adder merangkai n buah Full Adder secara beruntun di mana bit carry merambat (ripple) dari LSB ke MSB."
                },
                {
                    q: "Pada Full Subtractor, input yang digunakan adalah:",
                    opt: ["2 input: A dan B", "4 input: A, B, Cin, Bin", "3 input: A, B, dan Bin (Borrow-in)", "2 input: Minuend dan Subtrahend saja"],
                    ans: 2,
                    exp: "Full Subtractor memiliki 3 input: Bit A (Minuend), Bit B (Subtrahend), dan Bin (Borrow dari kolom sebelah kanan)."
                },
                {
                    q: "Hitunglah penjumlahan biner vertikal bersusun: 1101₂ + 1011₂",
                    opt: ["11000₂ (24₁₀)", "10110₂ (22₁₀)", "11100₂ (28₁₀)", "10010₂ (18₁₀)"],
                    ans: 0,
                    exp: "13₁₀ (1101₂) + 11₁₀ (1011₂) = 24₁₀ (11000₂)."
                },
                {
                    q: "Hitunglah pengurangan biner vertikal bersusun: 1100₂ − 0101₂",
                    opt: ["0110₂ (6₁₀)", "1001₂ (9₁₀)", "0101₂ (5₁₀)", "0111₂ (7₁₀)"],
                    ans: 3,
                    exp: "12₁₀ (1100₂) − 5₁₀ (0101₂) = 7₁₀ (0111₂)."
                },
                {
                    q: "Persamaan Carry-out (Cout) pada Full Adder dapat disederhanakan menjadi:",
                    opt: ["Cout = A + B + Cin", "Cout = AB + BCin + ACin", "Cout = A ⊕ B ⊕ Cin", "Cout = A'B'Cin"],
                    ans: 1,
                    exp: "Cout bernilai 1 jika setidaknya dua dari ketiga input bernilai 1: AB + BCin + ACin."
                },
                {
                    q: "Apakah fungsi gerbang XOR dalam rangkaian Half Adder dan Half Subtractor?",
                    opt: ["Menghasilkan bit penjumlahan (SUM) dan bit pengurangan (DIFFERENCE)", "Menghasilkan bit Carry", "Menghasilkan bit Borrow", "Sebagai penguat sinyal clock"],
                    ans: 0,
                    exp: "Baik pada adder maupun subtractor 2-bit, operasi dasar A ⊕ B menghasilkan bit hasil (Sum atau Difference)."
                },
                {
                    q: "Jika desimal 15₁₀ dan 7₁₀ dijumlahkan menggunakan kalkulator biner bersusun, berapakah bit carry yang dihasilkan?",
                    opt: ["0", "2", "1 (karena 15 + 7 = 22₁₀ = 10110₂)", "Tak tentu"],
                    ans: 2,
                    exp: "1111₂ + 0111₂ = 10110₂ (terdapat Carry-out akhir bernilai 1 pada MSB)."
                },
                {
                    q: "Pada Full Subtractor, berapakah nilai Difference (D) dan Borrow (Bout) jika A = 0, B = 1, dan Bin = 1?",
                    opt: ["D = 1, Bout = 1", "D = 0, Bout = 1", "D = 1, Bout = 0", "D = 0, Bout = 0"],
                    ans: 1,
                    exp: "0 - 1 - 1 = -2₁₀. Dengan meminjam 2 (Bout=1), Difference = 2 - 2 = 0."
                },
                {
                    q: "Gerbang logika tambahan yang membedakan rangkaian Half Subtractor dari Half Adder adalah:",
                    opt: ["Gerbang NAND", "Gerbang XNOR", "Gerbang Buffer", "Gerbang NOT (Inverter) pada input A"],
                    ans: 3,
                    exp: "Half Adder: C = A·B. Half Subtractor: Bout = A'·B (membutuhkan gerbang NOT untuk membalik A)."
                },
                {
                    q: "Berapa jumlah Full Adder yang dibutuhkan untuk membuat penjumlah biner 8-bit Ripple Carry Adder?",
                    opt: ["4 buah Full Adder", "8 buah Full Adder (atau 7 Full Adder + 1 Half Adder)", "16 buah Full Adder", "2 buah Full Adder"],
                    ans: 1,
                    exp: "Untuk menjumlahkan 8 bit data diperlukan 8 tingkatan adder berantai."
                },
                {
                    q: "Apakah kelemahan utama dari Ripple Carry Adder (RCA) pada kecepatan pemrosesan tinggi?",
                    opt: ["Waktu tunda propagasi (propagation delay) bit carry yang merambat dari bit ke bit", "Membutuhkan daya listrik baterai ganda", "Menghasilkan bilangan pecahan", "Tidak kompatibel dengan sistem biner"],
                    ans: 0,
                    exp: "Bit MSB harus menunggu hasil Carry dari seluruh bit sebelumnya merambat (ripple), membatasi frekuensi kerja CPU."
                },
                {
                    q: "Pada pengurangan biner 10₂ − 1₂, berapakah hasilnya?",
                    opt: ["0₂", "11₂", "10₂", "1₂"],
                    ans: 3,
                    exp: "10₂ = 2₁₀. 2 - 1 = 1₁₀ = 1₂."
                },
                {
                    q: "Rangkaian ALU yang dapat difungsikan sekaligus sebagai Adder dan Subtractor dengan pin kontrol mode (M) dinamakan:",
                    opt: ["Multiplikator Dinamis", "Barrel Shifter", "Adder-Subtractor Terpadu (Controlled Adder-Subtractor dengan gerbang XOR)", "Counter Asinkron"],
                    ans: 2,
                    exp: "Dengan menempatkan gerbang XOR sebagai pembalik terkontrol pada input B, sebuah adder dapat berfungsi sebagai subtractor via 2's complement saat M = 1."
                }
            ]
        };

    </script>
</body>

</html>