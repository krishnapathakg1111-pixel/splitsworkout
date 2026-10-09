"""Generate branded 1200x630 Open Graph images -> public/og/*.png  (run: python3 scripts/generate-og.py)"""
from PIL import Image, ImageDraw, ImageFont
import textwrap
W, H = 1200, 630
POP = '/usr/share/fonts/truetype/google-fonts/Poppins-%s.ttf'
def font(w, s):
    try: return ImageFont.truetype(POP % w, s)
    except Exception: return ImageFont.load_default()
cards = {
  'default':   ('Find Your Split. Build Your Workout. Train Smarter.', 'Workout splits · Exercise library · Workout planner'),
  'splits':    ('Workout Splits', 'Find the right training split for your goals'),
  'exercises': ('Exercise Library', 'Muscles worked, form cues and alternatives'),
  'muscles':   ('Muscle Guide', 'Anatomy, best exercises and training tips'),
  'tools':     ('Free Workout Tools', 'Split Finder · Workout Planner · Calculators'),
  'guides':    ('Workout Split Guides', 'Practical guides to choosing and running a split'),
}
logo = Image.open('public/logo.png').convert('RGBA')
mascot = Image.open('public/mascot-main.webp').convert('RGBA')
bbox = mascot.getbbox(); mascot = mascot.crop(bbox)
for key, (title, sub) in cards.items():
    im = Image.new('RGB', (W, H), '#FFFDF7')
    d = ImageDraw.Draw(im)
    # soft green panel + accent bar
    d.rectangle([0, 0, W, 10], fill='#22C55E')
    panel = Image.new('RGBA', (W, H), (0, 0, 0, 0)); pd = ImageDraw.Draw(panel)
    pd.ellipse([700, 80, 1300, 760], fill=(220, 252, 231, 255))
    im.paste(panel, (0, 0), panel)
    lw = 380; lh = int(logo.height * lw / logo.width)
    im.paste(logo.resize((lw, lh), Image.LANCZOS), (64, 56), logo.resize((lw, lh), Image.LANCZOS))
    mh = 470; mw = int(mascot.width * mh / mascot.height)
    m = mascot.resize((mw, mh), Image.LANCZOS)
    im.paste(m, (W - mw - 40, H - mh - 30), m)
    size = 64 if len(title) < 30 else 54
    lines = textwrap.wrap(title, width=18 if size == 64 else 22)[:3]
    y = 190
    for ln in lines:
        d.text((64, y), ln, font=font('Bold', size), fill='#111827'); y += size + 10
    d.text((64, y + 14), sub, font=font('Medium', 28), fill='#16A34A')
    d.text((64, H - 64), 'splitsworkout.com', font=font('SemiBold', 24), fill='#6B7280')
    im.save(f'public/og/{key}.png', optimize=True)
    print('og', key)
