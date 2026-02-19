/* === TEST BAR — Font & Color Scheme Previewer === */
/* Toggle: Click the "Test" button at bottom-right of page */
/* Remove this file + script tags when design is finalized */

(function () {
  'use strict';

  var FONTS = [
    { name: 'Bebas Neue', family: "'Bebas Neue', Impact, sans-serif", gfont: null },
    { name: 'Oswald', family: "'Oswald', sans-serif", gfont: 'Oswald:wght@400;700' },
    { name: 'Montserrat', family: "'Montserrat', sans-serif", gfont: 'Montserrat:wght@400;600;700' },
    { name: 'Playfair Display', family: "'Playfair Display', serif", gfont: 'Playfair+Display:wght@400;700' },
    { name: 'Poppins', family: "'Poppins', sans-serif", gfont: 'Poppins:wght@400;600;700' },
    { name: 'Raleway', family: "'Raleway', sans-serif", gfont: 'Raleway:wght@400;600;700' },
    { name: 'Archivo Black', family: "'Archivo Black', sans-serif", gfont: 'Archivo+Black' },
    { name: 'Permanent Marker', family: "'Permanent Marker', cursive", gfont: 'Permanent+Marker' },
    { name: 'Righteous', family: "'Righteous', cursive", gfont: 'Righteous' },
    { name: 'Fredoka One', family: "'Fredoka One', cursive", gfont: 'Fredoka+One' },
    { name: 'Anton', family: "'Anton', sans-serif", gfont: 'Anton' },
    { name: 'Abril Fatface', family: "'Abril Fatface', serif", gfont: 'Abril+Fatface' },
    { name: 'Rubik', family: "'Rubik', sans-serif", gfont: 'Rubik:wght@400;600;700' },
    { name: 'Josefin Sans', family: "'Josefin Sans', sans-serif", gfont: 'Josefin+Sans:wght@400;600;700' },
    { name: 'Barlow Condensed', family: "'Barlow Condensed', sans-serif", gfont: 'Barlow+Condensed:wght@400;600;700' },
    { name: 'Comfortaa', family: "'Comfortaa', cursive", gfont: 'Comfortaa:wght@400;600;700' },
    { name: 'Lobster', family: "'Lobster', cursive", gfont: 'Lobster' },
    { name: 'Pacifico', family: "'Pacifico', cursive", gfont: 'Pacifico' },
    { name: 'DM Serif Display', family: "'DM Serif Display', serif", gfont: 'DM+Serif+Display' },
    { name: 'Lora', family: "'Lora', serif", gfont: 'Lora:wght@400;600;700' }
  ];

  var SCHEMES = [
    /* === DARK THEMES === */
    {
      name: 'Neon Street',
      vars: {
        '--bg': '#0A0A0A', '--bg-alt': '#141414', '--bg-elevated': '#1E1E1E', '--bg-dark': '#050505',
        '--text': '#F5F5F5', '--text-muted': '#8A8A8A',
        '--accent': '#FF3D00', '--accent-hover': '#FF5722',
        '--accent-light': 'rgba(255, 61, 0, 0.1)', '--accent-glow': 'rgba(255, 61, 0, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(5, 5, 5, 0.7)', '--overlay-heavy': 'rgba(5, 5, 5, 0.9)'
      },
      swatch: ['#0A0A0A', '#FF3D00']
    },
    {
      name: 'Matcha Zen',
      vars: {
        '--bg': '#0A0F0A', '--bg-alt': '#111A11', '--bg-elevated': '#1A261A', '--bg-dark': '#050A05',
        '--text': '#E8F5E9', '--text-muted': '#81A784',
        '--accent': '#4CAF50', '--accent-hover': '#66BB6A',
        '--accent-light': 'rgba(76, 175, 80, 0.1)', '--accent-glow': 'rgba(76, 175, 80, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(5, 10, 5, 0.7)', '--overlay-heavy': 'rgba(5, 10, 5, 0.9)'
      },
      swatch: ['#0A0F0A', '#4CAF50']
    },
    {
      name: 'Ocean Chill',
      vars: {
        '--bg': '#0A0A14', '--bg-alt': '#10101E', '--bg-elevated': '#1A1A2E', '--bg-dark': '#05050A',
        '--text': '#E0F7FA', '--text-muted': '#80DEEA',
        '--accent': '#00BCD4', '--accent-hover': '#26C6DA',
        '--accent-light': 'rgba(0, 188, 212, 0.1)', '--accent-glow': 'rgba(0, 188, 212, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(5, 5, 10, 0.7)', '--overlay-heavy': 'rgba(5, 5, 10, 0.9)'
      },
      swatch: ['#0A0A14', '#00BCD4']
    },
    {
      name: 'Berry Burst',
      vars: {
        '--bg': '#140A14', '--bg-alt': '#1E101E', '--bg-elevated': '#2A1A2A', '--bg-dark': '#0A050A',
        '--text': '#FCE4EC', '--text-muted': '#CE93D8',
        '--accent': '#E040FB', '--accent-hover': '#EA80FC',
        '--accent-light': 'rgba(224, 64, 251, 0.1)', '--accent-glow': 'rgba(224, 64, 251, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(10, 5, 10, 0.7)', '--overlay-heavy': 'rgba(10, 5, 10, 0.9)'
      },
      swatch: ['#140A14', '#E040FB']
    },
    {
      name: 'Golden Hour',
      vars: {
        '--bg': '#14100A', '--bg-alt': '#1E1810', '--bg-elevated': '#2A2218', '--bg-dark': '#0A0805',
        '--text': '#FFF8E1', '--text-muted': '#BCAA8C',
        '--accent': '#FFB300', '--accent-hover': '#FFC107',
        '--accent-light': 'rgba(255, 179, 0, 0.1)', '--accent-glow': 'rgba(255, 179, 0, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(10, 8, 5, 0.7)', '--overlay-heavy': 'rgba(10, 8, 5, 0.9)'
      },
      swatch: ['#14100A', '#FFB300']
    },
    {
      name: 'Midnight Blue',
      vars: {
        '--bg': '#0D1117', '--bg-alt': '#161B22', '--bg-elevated': '#21262D', '--bg-dark': '#080C12',
        '--text': '#E6EDF3', '--text-muted': '#7D8590',
        '--accent': '#58A6FF', '--accent-hover': '#79C0FF',
        '--accent-light': 'rgba(88, 166, 255, 0.1)', '--accent-glow': 'rgba(88, 166, 255, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(8, 12, 18, 0.7)', '--overlay-heavy': 'rgba(8, 12, 18, 0.9)'
      },
      swatch: ['#0D1117', '#58A6FF']
    },
    {
      name: 'Coral Reef',
      vars: {
        '--bg': '#12090A', '--bg-alt': '#1C1012', '--bg-elevated': '#28181B', '--bg-dark': '#080505',
        '--text': '#FFF0F0', '--text-muted': '#D4A0A0',
        '--accent': '#FF6B6B', '--accent-hover': '#FF8A8A',
        '--accent-light': 'rgba(255, 107, 107, 0.1)', '--accent-glow': 'rgba(255, 107, 107, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(8, 5, 5, 0.7)', '--overlay-heavy': 'rgba(8, 5, 5, 0.9)'
      },
      swatch: ['#12090A', '#FF6B6B']
    },
    {
      name: 'Electric Lime',
      vars: {
        '--bg': '#0A0C08', '--bg-alt': '#12150E', '--bg-elevated': '#1C2016', '--bg-dark': '#050604',
        '--text': '#F0FFE0', '--text-muted': '#A0B880',
        '--accent': '#C6FF00', '--accent-hover': '#D4FF33',
        '--accent-light': 'rgba(198, 255, 0, 0.1)', '--accent-glow': 'rgba(198, 255, 0, 0.25)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(5, 6, 4, 0.7)', '--overlay-heavy': 'rgba(5, 6, 4, 0.9)'
      },
      swatch: ['#0A0C08', '#C6FF00']
    },
    {
      name: 'Plum Velvet',
      vars: {
        '--bg': '#110A16', '--bg-alt': '#1A1020', '--bg-elevated': '#24182E', '--bg-dark': '#08050C',
        '--text': '#F3E8FF', '--text-muted': '#A880C8',
        '--accent': '#9C27B0', '--accent-hover': '#BA68C8',
        '--accent-light': 'rgba(156, 39, 176, 0.1)', '--accent-glow': 'rgba(156, 39, 176, 0.35)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(8, 5, 12, 0.7)', '--overlay-heavy': 'rgba(8, 5, 12, 0.9)'
      },
      swatch: ['#110A16', '#9C27B0']
    },
    {
      name: 'Teal Noir',
      vars: {
        '--bg': '#0A1210', '--bg-alt': '#101C18', '--bg-elevated': '#182822', '--bg-dark': '#050A08',
        '--text': '#E0FFF5', '--text-muted': '#6DB8A0',
        '--accent': '#009688', '--accent-hover': '#26A69A',
        '--accent-light': 'rgba(0, 150, 136, 0.1)', '--accent-glow': 'rgba(0, 150, 136, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(5, 10, 8, 0.7)', '--overlay-heavy': 'rgba(5, 10, 8, 0.9)'
      },
      swatch: ['#0A1210', '#009688']
    },
    {
      name: 'Cherry Pop',
      vars: {
        '--bg': '#120608', '--bg-alt': '#1C0C10', '--bg-elevated': '#281218', '--bg-dark': '#080304',
        '--text': '#FFF0F2', '--text-muted': '#D08090',
        '--accent': '#E91E63', '--accent-hover': '#F06292',
        '--accent-light': 'rgba(233, 30, 99, 0.1)', '--accent-glow': 'rgba(233, 30, 99, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(8, 3, 4, 0.7)', '--overlay-heavy': 'rgba(8, 3, 4, 0.9)'
      },
      swatch: ['#120608', '#E91E63']
    },
    {
      name: 'Rose Gold',
      vars: {
        '--bg': '#14100E', '--bg-alt': '#1E1816', '--bg-elevated': '#2A2220', '--bg-dark': '#0A0806',
        '--text': '#FFF5F0', '--text-muted': '#C8A898',
        '--accent': '#E8917A', '--accent-hover': '#F0A898',
        '--accent-light': 'rgba(232, 145, 122, 0.1)', '--accent-glow': 'rgba(232, 145, 122, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(10, 8, 6, 0.7)', '--overlay-heavy': 'rgba(10, 8, 6, 0.9)'
      },
      swatch: ['#14100E', '#E8917A']
    },
    {
      name: 'Mocha Brew',
      vars: {
        '--bg': '#140E0A', '--bg-alt': '#1E1610', '--bg-elevated': '#2A2018', '--bg-dark': '#0A0705',
        '--text': '#FFF3E0', '--text-muted': '#A08868',
        '--accent': '#8D6E63', '--accent-hover': '#A1887F',
        '--accent-light': 'rgba(141, 110, 99, 0.12)', '--accent-glow': 'rgba(141, 110, 99, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(10, 7, 5, 0.7)', '--overlay-heavy': 'rgba(10, 7, 5, 0.9)'
      },
      swatch: ['#140E0A', '#8D6E63']
    },
    {
      name: 'Slate Modern',
      vars: {
        '--bg': '#111315', '--bg-alt': '#1A1D20', '--bg-elevated': '#24282C', '--bg-dark': '#08090A',
        '--text': '#ECEFF1', '--text-muted': '#90A4AE',
        '--accent': '#78909C', '--accent-hover': '#90A4AE',
        '--accent-light': 'rgba(120, 144, 156, 0.1)', '--accent-glow': 'rgba(120, 144, 156, 0.25)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(8, 9, 10, 0.7)', '--overlay-heavy': 'rgba(8, 9, 10, 0.9)'
      },
      swatch: ['#111315', '#78909C']
    },
    {
      name: 'Sunset Blaze',
      vars: {
        '--bg': '#150C08', '--bg-alt': '#201410', '--bg-elevated': '#2C1C16', '--bg-dark': '#0A0604',
        '--text': '#FFF3E8', '--text-muted': '#C89870',
        '--accent': '#FF6D00', '--accent-hover': '#FF8F00',
        '--accent-light': 'rgba(255, 109, 0, 0.1)', '--accent-glow': 'rgba(255, 109, 0, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(10, 6, 4, 0.7)', '--overlay-heavy': 'rgba(10, 6, 4, 0.9)'
      },
      swatch: ['#150C08', '#FF6D00']
    },
    {
      name: 'Lavender Dream',
      vars: {
        '--bg': '#0E0A14', '--bg-alt': '#16101E', '--bg-elevated': '#201828', '--bg-dark': '#07050A',
        '--text': '#F0E8FF', '--text-muted': '#B0A0CC',
        '--accent': '#B388FF', '--accent-hover': '#C8A8FF',
        '--accent-light': 'rgba(179, 136, 255, 0.1)', '--accent-glow': 'rgba(179, 136, 255, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(7, 5, 10, 0.7)', '--overlay-heavy': 'rgba(7, 5, 10, 0.9)'
      },
      swatch: ['#0E0A14', '#B388FF']
    },
    {
      name: 'Forest Night',
      vars: {
        '--bg': '#080E08', '--bg-alt': '#0E180E', '--bg-elevated': '#162216', '--bg-dark': '#040804',
        '--text': '#E8F8E8', '--text-muted': '#6AAA6A',
        '--accent': '#2E7D32', '--accent-hover': '#43A047',
        '--accent-light': 'rgba(46, 125, 50, 0.1)', '--accent-glow': 'rgba(46, 125, 50, 0.3)',
        '--border': 'rgba(255, 255, 255, 0.08)', '--border-light': 'rgba(255, 255, 255, 0.15)',
        '--overlay': 'rgba(4, 8, 4, 0.7)', '--overlay-heavy': 'rgba(4, 8, 4, 0.9)'
      },
      swatch: ['#080E08', '#2E7D32']
    },

    /* === LIGHT THEMES === */
    {
      name: 'Clean Light',
      vars: {
        '--bg': '#FAFAFA', '--bg-alt': '#F0F0F0', '--bg-elevated': '#FFFFFF', '--bg-dark': '#E8E8E8',
        '--text': '#1A1A1A', '--text-muted': '#666666',
        '--accent': '#FF3D00', '--accent-hover': '#FF5722',
        '--accent-light': 'rgba(255, 61, 0, 0.08)', '--accent-glow': 'rgba(255, 61, 0, 0.2)',
        '--border': 'rgba(0, 0, 0, 0.1)', '--border-light': 'rgba(0, 0, 0, 0.15)',
        '--overlay': 'rgba(250, 250, 250, 0.7)', '--overlay-heavy': 'rgba(250, 250, 250, 0.9)'
      },
      swatch: ['#FAFAFA', '#FF3D00']
    },
    {
      name: 'Cream Classic',
      vars: {
        '--bg': '#FFF8F0', '--bg-alt': '#F5EDE0', '--bg-elevated': '#FFFFFF', '--bg-dark': '#EDE5D8',
        '--text': '#2D1B0E', '--text-muted': '#8B7355',
        '--accent': '#D84315', '--accent-hover': '#E64A19',
        '--accent-light': 'rgba(216, 67, 21, 0.08)', '--accent-glow': 'rgba(216, 67, 21, 0.2)',
        '--border': 'rgba(0, 0, 0, 0.08)', '--border-light': 'rgba(0, 0, 0, 0.12)',
        '--overlay': 'rgba(255, 248, 240, 0.7)', '--overlay-heavy': 'rgba(255, 248, 240, 0.9)'
      },
      swatch: ['#FFF8F0', '#D84315']
    },
    {
      name: 'Arctic Frost',
      vars: {
        '--bg': '#F0F8FF', '--bg-alt': '#E4EFF8', '--bg-elevated': '#FFFFFF', '--bg-dark': '#D8E8F2',
        '--text': '#0D2137', '--text-muted': '#5A7A95',
        '--accent': '#0288D1', '--accent-hover': '#039BE5',
        '--accent-light': 'rgba(2, 136, 209, 0.08)', '--accent-glow': 'rgba(2, 136, 209, 0.2)',
        '--border': 'rgba(0, 0, 0, 0.08)', '--border-light': 'rgba(0, 0, 0, 0.12)',
        '--overlay': 'rgba(240, 248, 255, 0.7)', '--overlay-heavy': 'rgba(240, 248, 255, 0.9)'
      },
      swatch: ['#F0F8FF', '#0288D1']
    },
    {
      name: 'Sage Garden',
      vars: {
        '--bg': '#F2F5F0', '--bg-alt': '#E5EAE0', '--bg-elevated': '#FFFFFF', '--bg-dark': '#D8DED2',
        '--text': '#1A2E1A', '--text-muted': '#5E7A5E',
        '--accent': '#558B2F', '--accent-hover': '#689F38',
        '--accent-light': 'rgba(85, 139, 47, 0.08)', '--accent-glow': 'rgba(85, 139, 47, 0.2)',
        '--border': 'rgba(0, 0, 0, 0.08)', '--border-light': 'rgba(0, 0, 0, 0.12)',
        '--overlay': 'rgba(242, 245, 240, 0.7)', '--overlay-heavy': 'rgba(242, 245, 240, 0.9)'
      },
      swatch: ['#F2F5F0', '#558B2F']
    },
    {
      name: 'Blush Pink',
      vars: {
        '--bg': '#FFF5F5', '--bg-alt': '#FFE8E8', '--bg-elevated': '#FFFFFF', '--bg-dark': '#F5D8D8',
        '--text': '#2D1520', '--text-muted': '#A06080',
        '--accent': '#D81B60', '--accent-hover': '#E91E75',
        '--accent-light': 'rgba(216, 27, 96, 0.08)', '--accent-glow': 'rgba(216, 27, 96, 0.2)',
        '--border': 'rgba(0, 0, 0, 0.08)', '--border-light': 'rgba(0, 0, 0, 0.12)',
        '--overlay': 'rgba(255, 245, 245, 0.7)', '--overlay-heavy': 'rgba(255, 245, 245, 0.9)'
      },
      swatch: ['#FFF5F5', '#D81B60']
    },
    {
      name: 'Sand Dune',
      vars: {
        '--bg': '#FAF6F0', '--bg-alt': '#F0E8DA', '--bg-elevated': '#FFFFFF', '--bg-dark': '#E5DDD0',
        '--text': '#3E2C1A', '--text-muted': '#9A8468',
        '--accent': '#BF8A30', '--accent-hover': '#D4A03A',
        '--accent-light': 'rgba(191, 138, 48, 0.08)', '--accent-glow': 'rgba(191, 138, 48, 0.2)',
        '--border': 'rgba(0, 0, 0, 0.08)', '--border-light': 'rgba(0, 0, 0, 0.12)',
        '--overlay': 'rgba(250, 246, 240, 0.7)', '--overlay-heavy': 'rgba(250, 246, 240, 0.9)'
      },
      swatch: ['#FAF6F0', '#BF8A30']
    },
    {
      name: 'Lilac Breeze',
      vars: {
        '--bg': '#F8F0FF', '--bg-alt': '#EDE0F8', '--bg-elevated': '#FFFFFF', '--bg-dark': '#E0D0F0',
        '--text': '#1A102A', '--text-muted': '#7A60A0',
        '--accent': '#7C4DFF', '--accent-hover': '#9670FF',
        '--accent-light': 'rgba(124, 77, 255, 0.08)', '--accent-glow': 'rgba(124, 77, 255, 0.2)',
        '--border': 'rgba(0, 0, 0, 0.08)', '--border-light': 'rgba(0, 0, 0, 0.12)',
        '--overlay': 'rgba(248, 240, 255, 0.7)', '--overlay-heavy': 'rgba(248, 240, 255, 0.9)'
      },
      swatch: ['#F8F0FF', '#7C4DFF']
    }
  ];

  var loadedFonts = {};
  var bar = null;
  var isOpen = false;
  var toggleBtn = null;

  /* -- Color utility helpers -- */
  function hexToRgb(hex) {
    var r = parseInt(hex.substring(1, 3), 16);
    var g = parseInt(hex.substring(3, 5), 16);
    var b = parseInt(hex.substring(5, 7), 16);
    return { r: r, g: g, b: b };
  }

  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1);
  }

  function luminance(rgb) {
    return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  }

  function mixColor(hex, target, amount) {
    var c = hexToRgb(hex);
    var t = hexToRgb(target);
    return rgbToHex(
      c.r + (t.r - c.r) * amount,
      c.g + (t.g - c.g) * amount,
      c.b + (t.b - c.b) * amount
    );
  }

  function lighten(hex, amount) { return mixColor(hex, '#FFFFFF', amount); }
  function darken(hex, amount) { return mixColor(hex, '#000000', amount); }

  /* Generate a full scheme from just bg + accent */
  function generateScheme(bgHex, accentHex) {
    var bgRgb = hexToRgb(bgHex);
    var accentRgb = hexToRgb(accentHex);
    var isLight = luminance(bgRgb) > 0.5;

    var bgAlt = isLight ? darken(bgHex, 0.05) : lighten(bgHex, 0.05);
    var bgElevated = isLight ? lighten(bgHex, 0.3) : lighten(bgHex, 0.08);
    var bgDark = darken(bgHex, 0.08);
    var text = isLight ? '#1A1A1A' : '#F5F5F5';
    var textMuted = isLight ? '#666666' : '#8A8A8A';
    var accentHover = lighten(accentHex, 0.15);
    var borderAlpha = isLight ? '0, 0, 0' : '255, 255, 255';

    return {
      '--bg': bgHex,
      '--bg-alt': bgAlt,
      '--bg-elevated': bgElevated,
      '--bg-dark': bgDark,
      '--text': text,
      '--text-muted': textMuted,
      '--accent': accentHex,
      '--accent-hover': accentHover,
      '--accent-light': 'rgba(' + accentRgb.r + ', ' + accentRgb.g + ', ' + accentRgb.b + ', ' + (isLight ? '0.08' : '0.1') + ')',
      '--accent-glow': 'rgba(' + accentRgb.r + ', ' + accentRgb.g + ', ' + accentRgb.b + ', 0.3)',
      '--border': 'rgba(' + borderAlpha + ', ' + (isLight ? '0.1' : '0.08') + ')',
      '--border-light': 'rgba(' + borderAlpha + ', 0.15)',
      '--overlay': 'rgba(' + bgRgb.r + ', ' + bgRgb.g + ', ' + bgRgb.b + ', 0.7)',
      '--overlay-heavy': 'rgba(' + bgRgb.r + ', ' + bgRgb.g + ', ' + bgRgb.b + ', 0.9)'
    };
  }

  function applyCustomScheme(bgHex, accentHex) {
    var vars = generateScheme(bgHex, accentHex);
    var keys = Object.keys(vars);
    for (var i = 0; i < keys.length; i++) {
      document.documentElement.style.setProperty(keys[i], vars[keys[i]]);
    }
    document.documentElement.style.setProperty('--shadow-accent', '0 4px 20px ' + vars['--accent-glow']);
    document.documentElement.style.setProperty('--shadow-accent-lg', '0 8px 40px ' + vars['--accent-glow']);
    /* deselect preset swatches */
    updateActivePills('scheme', -1);
    localStorage.setItem('testbar-custom-bg', bgHex);
    localStorage.setItem('testbar-custom-accent', accentHex);
    localStorage.removeItem('testbar-scheme');
  }

  function loadFont(font) {
    if (!font.gfont || loadedFonts[font.name]) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=' + font.gfont + '&display=swap';
    document.head.appendChild(link);
    loadedFonts[font.name] = true;
  }

  function loadAllFonts() {
    var families = [];
    for (var i = 0; i < FONTS.length; i++) {
      if (FONTS[i].gfont && !loadedFonts[FONTS[i].name]) {
        families.push(FONTS[i].gfont);
        loadedFonts[FONTS[i].name] = true;
      }
    }
    if (families.length === 0) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=' + families.join('&family=') + '&display=swap';
    document.head.appendChild(link);
  }

  function applyFont(index) {
    var font = FONTS[index];
    loadFont(font);
    document.documentElement.style.setProperty('--font-display', font.family);
    localStorage.setItem('testbar-font', index);
    updateActivePills('font', index);
  }

  function applyScheme(index) {
    var scheme = SCHEMES[index];
    var keys = Object.keys(scheme.vars);
    for (var i = 0; i < keys.length; i++) {
      document.documentElement.style.setProperty(keys[i], scheme.vars[keys[i]]);
    }
    document.documentElement.style.setProperty('--shadow-accent', '0 4px 20px ' + scheme.vars['--accent-glow']);
    document.documentElement.style.setProperty('--shadow-accent-lg', '0 8px 40px ' + scheme.vars['--accent-glow']);
    localStorage.setItem('testbar-scheme', index);
    localStorage.removeItem('testbar-custom-bg');
    localStorage.removeItem('testbar-custom-accent');
    updateActivePills('scheme', index);
    /* sync pickers to preset colors */
    var bgPicker = document.getElementById('tb-custom-bg');
    var accentPicker = document.getElementById('tb-custom-accent');
    if (bgPicker) bgPicker.value = scheme.vars['--bg'];
    if (accentPicker) accentPicker.value = scheme.vars['--accent'];
  }

  function resetAll() {
    localStorage.removeItem('testbar-font');
    localStorage.removeItem('testbar-scheme');
    localStorage.removeItem('testbar-custom-bg');
    localStorage.removeItem('testbar-custom-accent');
    var props = ['--font-display', '--bg', '--bg-alt', '--bg-elevated', '--bg-dark',
      '--text', '--text-muted', '--accent', '--accent-hover', '--accent-light', '--accent-glow',
      '--border', '--border-light', '--overlay', '--overlay-heavy',
      '--shadow-accent', '--shadow-accent-lg'];
    for (var i = 0; i < props.length; i++) {
      document.documentElement.style.removeProperty(props[i]);
    }
    updateActivePills('font', 0);
    updateActivePills('scheme', 0);
    /* reset color pickers to defaults */
    var bgPicker = document.getElementById('tb-custom-bg');
    var accentPicker = document.getElementById('tb-custom-accent');
    if (bgPicker) bgPicker.value = '#0A0A0A';
    if (accentPicker) accentPicker.value = '#FF3D00';
  }

  function updateActivePills(type, index) {
    if (!bar) return;
    var pills = bar.querySelectorAll('[data-' + type + ']');
    for (var i = 0; i < pills.length; i++) {
      if (parseInt(pills[i].getAttribute('data-' + type), 10) === index) {
        pills[i].classList.add('tb-active');
      } else {
        pills[i].classList.remove('tb-active');
      }
    }
  }

  function createBar() {
    bar = document.createElement('div');
    bar.id = 'testbar';
    bar.innerHTML = '' +
      '<style>' +
        '#testbar{position:fixed;bottom:0;left:0;right:0;z-index:999;' +
          'background:rgba(20,20,20,0.97);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.1);' +
          'transform:translateY(100%);opacity:0;transition:transform .3s ease,opacity .3s ease;' +
          'padding:16px 5%;overflow-y:auto;max-height:65vh;}' +
        '#testbar.tb-open{transform:translateY(0);opacity:1;}' +
        '.tb-section{margin-bottom:14px;}' +
        '.tb-section:last-child{margin-bottom:0;}' +
        '.tb-section-head{display:flex;align-items:center;gap:10px;margin-bottom:8px;}' +
        '.tb-label{font-family:"Space Mono",monospace;font-size:11px;color:#888;text-transform:uppercase;' +
          'letter-spacing:0.15em;flex-shrink:0;}' +
        '.tb-divider{flex:1;height:1px;background:rgba(255,255,255,0.08);}' +
        '.tb-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}' +
        '.tb-pill{padding:5px 10px;font-size:11px;border:1px solid rgba(255,255,255,0.15);' +
          'border-radius:999px;cursor:pointer;transition:all .15s ease;background:transparent;color:#ccc;' +
          'white-space:nowrap;}' +
        '.tb-pill:hover{border-color:rgba(255,255,255,0.4);color:#fff;}' +
        '.tb-pill.tb-active{background:#FF3D00;border-color:#FF3D00;color:#fff;}' +
        '.tb-swatch{width:28px;height:28px;border-radius:999px;cursor:pointer;border:2px solid rgba(255,255,255,0.15);' +
          'transition:all .15s ease;position:relative;overflow:hidden;flex-shrink:0;}' +
        '.tb-swatch:hover{border-color:rgba(255,255,255,0.5);transform:scale(1.1);}' +
        '.tb-swatch.tb-active{border-color:#fff;transform:scale(1.15);box-shadow:0 0 12px rgba(255,255,255,0.3);}' +
        '.tb-swatch-half{position:absolute;top:0;bottom:0;width:50%;}' +
        '.tb-swatch-half:first-child{left:0;}' +
        '.tb-swatch-half:last-child{right:0;}' +
        '.tb-reset{padding:5px 12px;font-size:10px;font-family:"Space Mono",monospace;border:1px solid rgba(255,255,255,0.2);' +
          'border-radius:999px;cursor:pointer;background:transparent;color:#aaa;text-transform:uppercase;' +
          'letter-spacing:0.1em;transition:all .15s ease;}' +
        '.tb-reset:hover{border-color:#FF1744;color:#FF1744;}' +
        '.tb-swatch-label{font-size:9px;color:#888;text-align:center;margin-top:2px;white-space:nowrap;}' +
        '.tb-swatch-wrap{display:flex;flex-direction:column;align-items:center;gap:2px;}' +
        '.tb-group-label{font-size:9px;color:#555;text-transform:uppercase;letter-spacing:0.1em;' +
          'font-family:"Space Mono",monospace;padding:2px 8px;flex-shrink:0;}' +
        '.tb-custom{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:8px;' +
          'padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;}' +
        '.tb-custom-label{font-family:"Space Mono",monospace;font-size:10px;color:#666;text-transform:uppercase;' +
          'letter-spacing:0.1em;}' +
        '.tb-color-group{display:flex;align-items:center;gap:6px;}' +
        '.tb-color-input{width:36px;height:36px;border:2px solid rgba(255,255,255,0.2);border-radius:8px;' +
          'cursor:pointer;padding:0;background:none;-webkit-appearance:none;appearance:none;}' +
        '.tb-color-input::-webkit-color-swatch-wrapper{padding:0;}' +
        '.tb-color-input::-webkit-color-swatch{border:none;border-radius:6px;}' +
        '.tb-color-input::-moz-color-swatch{border:none;border-radius:6px;}' +
        '.tb-color-input:hover{border-color:rgba(255,255,255,0.5);transform:scale(1.05);}' +
        '.tb-color-hex{font-family:"Space Mono",monospace;font-size:11px;color:#aaa;min-width:62px;}' +
        '.tb-custom-plus{font-size:16px;color:#555;margin:0 4px;}' +
        '#tb-toggle{position:fixed;bottom:20px;right:20px;z-index:1000;padding:10px 20px;' +
          'font-family:"Space Mono",monospace;font-size:12px;font-weight:700;text-transform:uppercase;' +
          'letter-spacing:0.15em;color:#fff;background:#FF3D00;border:none;border-radius:999px;cursor:pointer;' +
          'box-shadow:0 4px 20px rgba(255,61,0,0.4);transition:all .2s ease;}' +
        '#tb-toggle:hover{transform:scale(1.05);box-shadow:0 6px 28px rgba(255,61,0,0.5);}' +
        '#tb-toggle.tb-btn-active{background:#333;box-shadow:0 4px 12px rgba(0,0,0,0.4);}' +
      '</style>' +
      '<div class="tb-section" id="tb-fonts-section"></div>' +
      '<div class="tb-section" id="tb-schemes-section"></div>' +
      '<div class="tb-section" id="tb-custom-section"></div>';

    /* fonts section */
    var fontsSection = bar.querySelector('#tb-fonts-section');
    fontsSection.innerHTML = '<div class="tb-section-head"><span class="tb-label">Fonts (' + FONTS.length + ')</span><span class="tb-divider"></span></div>';
    var fontsRow = document.createElement('div');
    fontsRow.className = 'tb-row';
    for (var i = 0; i < FONTS.length; i++) {
      var pill = document.createElement('button');
      pill.className = 'tb-pill';
      pill.setAttribute('data-font', i);
      pill.textContent = FONTS[i].name;
      pill.style.fontFamily = FONTS[i].family;
      pill.addEventListener('click', (function (idx) {
        return function () { applyFont(idx); };
      })(i));
      fontsRow.appendChild(pill);
    }
    fontsSection.appendChild(fontsRow);

    /* schemes section */
    var schemesSection = bar.querySelector('#tb-schemes-section');
    schemesSection.innerHTML = '<div class="tb-section-head"><span class="tb-label">Colors (' + SCHEMES.length + ')</span><span class="tb-divider"></span><button class="tb-reset" id="tb-reset-btn">Reset</button></div>';

    var schemesRow = document.createElement('div');
    schemesRow.className = 'tb-row';

    /* find where light themes start */
    var lightStart = -1;
    for (var k = 0; k < SCHEMES.length; k++) {
      var bg = SCHEMES[k].vars['--bg'];
      /* simple heuristic: if bg hex value is light */
      if (bg.charAt(1) >= 'A' || bg.charAt(1) >= 'a' || parseInt(bg.substring(1, 3), 16) > 200) {
        lightStart = k;
        break;
      }
    }

    for (var j = 0; j < SCHEMES.length; j++) {
      if (j === 0) {
        var darkLabel = document.createElement('span');
        darkLabel.className = 'tb-group-label';
        darkLabel.textContent = 'Dark';
        schemesRow.appendChild(darkLabel);
      }
      if (j === lightStart) {
        var lightLabel = document.createElement('span');
        lightLabel.className = 'tb-group-label';
        lightLabel.style.marginLeft = '8px';
        lightLabel.textContent = 'Light';
        schemesRow.appendChild(lightLabel);
      }

      var wrap = document.createElement('div');
      wrap.className = 'tb-swatch-wrap';
      var swatch = document.createElement('button');
      swatch.className = 'tb-swatch';
      swatch.setAttribute('data-scheme', j);
      swatch.title = SCHEMES[j].name;
      swatch.innerHTML = '<span class="tb-swatch-half" style="background:' + SCHEMES[j].swatch[0] + '"></span>' +
        '<span class="tb-swatch-half" style="background:' + SCHEMES[j].swatch[1] + '"></span>';
      swatch.addEventListener('click', (function (idx) {
        return function () { applyScheme(idx); };
      })(j));
      var label = document.createElement('span');
      label.className = 'tb-swatch-label';
      label.textContent = SCHEMES[j].name;
      wrap.appendChild(swatch);
      wrap.appendChild(label);
      schemesRow.appendChild(wrap);
    }
    schemesSection.appendChild(schemesRow);

    /* custom color picker section */
    var customSection = bar.querySelector('#tb-custom-section');
    customSection.innerHTML = '<div class="tb-section-head"><span class="tb-label">Custom Colors</span><span class="tb-divider"></span></div>';

    var customRow = document.createElement('div');
    customRow.className = 'tb-custom';

    var savedCustomBg = localStorage.getItem('testbar-custom-bg') || '#0A0A0A';
    var savedCustomAccent = localStorage.getItem('testbar-custom-accent') || '#FF3D00';

    /* bg picker */
    var bgGroup = document.createElement('div');
    bgGroup.className = 'tb-color-group';
    var bgLabel = document.createElement('span');
    bgLabel.className = 'tb-custom-label';
    bgLabel.textContent = 'Background';
    var bgInput = document.createElement('input');
    bgInput.type = 'color';
    bgInput.id = 'tb-custom-bg';
    bgInput.className = 'tb-color-input';
    bgInput.value = savedCustomBg;
    var bgHex = document.createElement('span');
    bgHex.className = 'tb-color-hex';
    bgHex.id = 'tb-custom-bg-hex';
    bgHex.textContent = savedCustomBg;
    bgGroup.appendChild(bgLabel);
    bgGroup.appendChild(bgInput);
    bgGroup.appendChild(bgHex);

    var plus = document.createElement('span');
    plus.className = 'tb-custom-plus';
    plus.textContent = '+';

    /* accent picker */
    var accentGroup = document.createElement('div');
    accentGroup.className = 'tb-color-group';
    var accentLabel = document.createElement('span');
    accentLabel.className = 'tb-custom-label';
    accentLabel.textContent = 'Accent';
    var accentInput = document.createElement('input');
    accentInput.type = 'color';
    accentInput.id = 'tb-custom-accent';
    accentInput.className = 'tb-color-input';
    accentInput.value = savedCustomAccent;
    var accentHexEl = document.createElement('span');
    accentHexEl.className = 'tb-color-hex';
    accentHexEl.id = 'tb-custom-accent-hex';
    accentHexEl.textContent = savedCustomAccent;
    accentGroup.appendChild(accentLabel);
    accentGroup.appendChild(accentInput);
    accentGroup.appendChild(accentHexEl);

    customRow.appendChild(bgGroup);
    customRow.appendChild(plus);
    customRow.appendChild(accentGroup);
    customSection.appendChild(customRow);

    /* live update on color change */
    function onPickerChange() {
      var bg = bgInput.value;
      var accent = accentInput.value;
      bgHex.textContent = bg;
      accentHexEl.textContent = accent;
      applyCustomScheme(bg, accent);
    }
    bgInput.addEventListener('input', onPickerChange);
    accentInput.addEventListener('input', onPickerChange);

    bar.querySelector('#tb-reset-btn').addEventListener('click', resetAll);
    document.body.appendChild(bar);
  }

  function toggleBar() {
    if (!bar) {
      createBar();
      loadAllFonts();
      var savedFont = localStorage.getItem('testbar-font');
      var savedScheme = localStorage.getItem('testbar-scheme');
      var savedCBg = localStorage.getItem('testbar-custom-bg');
      var savedCAcc = localStorage.getItem('testbar-custom-accent');
      updateActivePills('font', savedFont !== null ? parseInt(savedFont, 10) : 0);
      if (savedCBg && savedCAcc) {
        updateActivePills('scheme', -1);
        var bgP = document.getElementById('tb-custom-bg');
        var accP = document.getElementById('tb-custom-accent');
        if (bgP) { bgP.value = savedCBg; document.getElementById('tb-custom-bg-hex').textContent = savedCBg; }
        if (accP) { accP.value = savedCAcc; document.getElementById('tb-custom-accent-hex').textContent = savedCAcc; }
      } else {
        updateActivePills('scheme', savedScheme !== null ? parseInt(savedScheme, 10) : 0);
      }
    }
    isOpen = !isOpen;
    if (isOpen) {
      bar.classList.add('tb-open');
      toggleBtn.classList.add('tb-btn-active');
      toggleBtn.textContent = 'Close';
    } else {
      bar.classList.remove('tb-open');
      toggleBtn.classList.remove('tb-btn-active');
      toggleBtn.textContent = 'Test';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    toggleBtn = document.createElement('button');
    toggleBtn.id = 'tb-toggle';
    toggleBtn.textContent = 'Test';
    toggleBtn.addEventListener('click', toggleBar);
    document.body.appendChild(toggleBtn);
  });

  var savedFont = localStorage.getItem('testbar-font');
  var savedScheme = localStorage.getItem('testbar-scheme');
  var savedCustomBgInit = localStorage.getItem('testbar-custom-bg');
  var savedCustomAccentInit = localStorage.getItem('testbar-custom-accent');
  if (savedFont !== null) applyFont(parseInt(savedFont, 10));
  if (savedCustomBgInit && savedCustomAccentInit) {
    applyCustomScheme(savedCustomBgInit, savedCustomAccentInit);
  } else if (savedScheme !== null) {
    applyScheme(parseInt(savedScheme, 10));
  }

})();
