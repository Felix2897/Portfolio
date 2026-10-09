import { logoPaths } from "../logoPaths";

const PAPER = '#f2ede6';
const INK = '#1a1510';
const ACCENT = '#e8a020';

function surface(width, height, color) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Canvas unavailable');
  context.fillStyle = color;
  context.fillRect(0, 0, width, height);
  return { canvas, context };
}

function text(context, value, x, y, size, weight = 500, color = INK) {
  context.fillStyle = color;
  context.font = `${weight} ${size}px "Archivo", sans-serif`;
  context.fillText(value, x, y);
}

function drawLogo(context, x, y, width) {
  context.save();
  context.translate(x, y);
  context.scale(width / 75, width / 75);
  logoPaths.forEach((path, index) => {
    const gradient = context.createLinearGradient(0, 0, 75, 0);
    gradient.addColorStop(0, index === 0 ? ACCENT : '#cf8f1a');
    gradient.addColorStop(1, index === 0 ? '#cf8f1a' : ACCENT);
    context.fillStyle = gradient;
    context.fill(new Path2D(path));
  });
  context.restore();
}

// Draw the badge with the same fonts and portrait as the portfolio.
// Keeping this local avoids remote textures and duplicated photo assets.
export async function createBadgeTextures() {
  const portrait = new Image();
  const imageReady = new Promise((resolve, reject) => {
    portrait.onload = resolve;
    portrait.onerror = reject;
  });
  portrait.src = `${import.meta.env.BASE_URL}assets/images/Andrea.jpeg`;
  await Promise.all([
    imageReady,
    document.fonts.load('800 80px Archivo'),
    document.fonts.load('500 32px Archivo'),
  ]);

  const front = surface(1024, 1440, PAPER);
  const ctx = front.context;
  drawLogo(ctx, 68, 122, 156);
  text(ctx, 'PORTFOLIO', 700, 187, 30, 500);
  ctx.fillStyle = ACCENT;
  ctx.fillRect(68, 235, 888, 4);

  // Match the existing portrait crop, with enough room around Andrea's face.
  const scale = Math.max(888 / portrait.width, 786 / portrait.height);
  ctx.save();
  ctx.beginPath();
  ctx.rect(68, 278, 888, 786);
  ctx.clip();
  ctx.drawImage(portrait, 68 + (888 - portrait.width * scale) / 2, 278,
    portrait.width * scale, portrait.height * scale);
  ctx.restore();
  text(ctx, 'Andrea', 68, 1178, 84, 800);
  text(ctx, 'Feliziani', 68, 1267, 84, 800);
  text(ctx, 'UI/UX Designer · Front-end Developer', 68, 1354, 31);

  const back = surface(1024, 1440, INK);
  drawLogo(back.context, 68, 113, 218);
  back.context.fillStyle = ACCENT;
  back.context.fillRect(68, 278, 888, 4);
  text(back.context, 'Design.', 68, 680, 134, 800, PAPER);
  text(back.context, 'Develop.', 68, 828, 134, 800, PAPER);
  text(back.context, 'Andrea Feliziani', 68, 1230, 54, 800, PAPER);
  text(back.context, 'UI/UX Designer · Front-end Developer', 68, 1310, 31, 500, PAPER);

  const strap = surface(768, 192, INK);
  text(strap.context, 'ANDREA  FELIZIANI', 42, 111, 42, 800, PAPER);
  strap.context.fillStyle = ACCENT;
  strap.context.fillRect(652, 64, 6, 66);

  const mobileStrap = surface(768, 192, INK);
  text(mobileStrap.context, 'DESIGN & CODE', 42, 111, 42, 800, PAPER);
  mobileStrap.context.fillStyle = ACCENT;
  mobileStrap.context.fillRect(652, 64, 6, 66);

  return {
    front: front.canvas.toDataURL('image/webp', 0.92),
    back: back.canvas.toDataURL('image/webp', 0.92),
    strap: strap.canvas.toDataURL('image/png'),
    mobileStrap: mobileStrap.canvas.toDataURL('image/png'),
  };
}
