using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;

public class OgGenerator {
    private static ImageCodecInfo GetJpegCodec() {
        foreach (var codec in ImageCodecInfo.GetImageEncoders()) {
            if (codec.MimeType == "image/jpeg") return codec;
        }
        return null;
    }

    public static void GenerateHomeOg(string heroPath, string outPath) {
        int width = 1200;
        int height = 630;
        using (var bmp = new Bitmap(width, height))
        using (var g = Graphics.FromImage(bmp)) {
            g.SmoothingMode = SmoothingMode.AntiAlias;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.TextRenderingHint = System.Drawing.Text.TextRenderingHint.ClearTypeGridFit;

            // 1. Dark sleek background
            using (var brush = new LinearGradientBrush(new Point(0, 0), new Point(width, height),
                Color.FromArgb(255, 9, 11, 16), Color.FromArgb(255, 15, 23, 42))) {
                g.FillRectangle(brush, 0, 0, width, height);
            }

            // 2. Cyan-blue circular glow behind photo
            using (var path = new GraphicsPath()) {
                path.AddEllipse(620, 20, 580, 580);
                using (var pbg = new PathGradientBrush(path)) {
                    pbg.CenterColor = Color.FromArgb(70, 14, 165, 233);
                    pbg.SurroundColors = new Color[] { Color.FromArgb(0, 9, 11, 16) };
                    g.FillPath(pbg, path);
                }
            }

            // 3. Draw Hero Portrait
            if (File.Exists(heroPath)) {
                using (var hero = Image.FromFile(heroPath)) {
                    float targetH = 630;
                    float scale = targetH / hero.Height;
                    int targetW = (int)(hero.Width * scale);
                    int targetX = width - targetW + 20;
                    int targetY = height - (int)targetH;
                    g.DrawImage(hero, new Rectangle(targetX, targetY, targetW, (int)targetH), 0, 0, hero.Width, hero.Height, GraphicsUnit.Pixel);

                    // Left vignette blend
                    using (var fadeBrush = new LinearGradientBrush(new Point(targetX - 50, 0), new Point(targetX + 160, 0),
                        Color.FromArgb(255, 9, 11, 16), Color.FromArgb(0, 9, 11, 16))) {
                        g.FillRectangle(fadeBrush, targetX - 50, 0, 210, height);
                    }
                }
            }

            // 4. Accent line at top
            using (var pen = new Pen(Color.FromArgb(220, 56, 189, 248), 3)) {
                g.DrawLine(pen, 0, 0, width, 0);
            }

            // 5. Status Pill: FULL STACK DEVELOPER & AI ENGINEER
            using (var badgeBrush = new SolidBrush(Color.FromArgb(40, 255, 255, 255)))
            using (var badgePen = new Pen(Color.FromArgb(80, 56, 189, 248), 1)) {
                g.FillRectangle(badgeBrush, 70, 75, 360, 32);
                g.DrawRectangle(badgePen, 70, 75, 360, 32);
            }
            using (var dotBrush = new SolidBrush(Color.FromArgb(255, 16, 185, 129))) {
                g.FillEllipse(dotBrush, 85, 87, 8, 8);
            }
            using (var badgeFont = new Font("Segoe UI", 10.5f, FontStyle.Bold))
            using (var cyanBrush = new SolidBrush(Color.FromArgb(255, 56, 189, 248))) {
                g.DrawString("FULL STACK DEVELOPER & AI ENGINEER", badgeFont, cyanBrush, 103, 81);
            }

            // 6. Name: NARESH N
            using (var nameFont = new Font("Georgia", 58, FontStyle.Bold))
            using (var nameBrush = new SolidBrush(Color.White)) {
                g.DrawString("NARESH N", nameFont, nameBrush, 64, 124);
            }

            // 7. Subtitle
            using (var subFont = new Font("Georgia", 18, FontStyle.Italic))
            using (var subBrush = new SolidBrush(Color.FromArgb(240, 203, 213, 225))) {
                g.DrawString("Building Digital Experiences at the Edge of Code.", subFont, subBrush, 70, 225);
            }

            // 8. Credentials
            using (var bodyFont = new Font("Segoe UI", 13.5f, FontStyle.Regular))
            using (var bodyBrush = new SolidBrush(Color.FromArgb(255, 148, 163, 184))) {
                g.DrawString("• Second-year B.Tech CSE-IT at NIAT x Yenepoya University", bodyFont, bodyBrush, 70, 285);
                g.DrawString("• Founder & Sole Developer of Sangeetha Audio Platform", bodyFont, bodyBrush, 70, 318);
                g.DrawString("• Kaggle Rank #63 — Product Image Generation Competition", bodyFont, bodyBrush, 70, 351);
            }

            // 9. Tech Bar
            using (var tagFont = new Font("Consolas", 11.5f, FontStyle.Bold))
            using (var tagBrush = new SolidBrush(Color.FromArgb(255, 147, 197, 253))) {
                g.DrawString("FLUTTER  ·  NEXT.JS  ·  NODE.JS  ·  DOCKER  ·  PYTORCH  ·  FASTAPI", tagFont, tagBrush, 70, 420);
            }

            // 10. Domain badge: nareshn.me
            using (var boxBrush = new SolidBrush(Color.FromArgb(40, 255, 255, 255)))
            using (var boxPen = new Pen(Color.FromArgb(100, 255, 255, 255), 1)) {
                g.FillRectangle(boxBrush, 70, 495, 230, 44);
                g.DrawRectangle(boxPen, 70, 495, 230, 44);
            }
            using (var checkBrush = new SolidBrush(Color.FromArgb(255, 14, 165, 233))) {
                g.FillEllipse(checkBrush, 88, 508, 18, 18);
            }
            using (var checkPen = new Pen(Color.White, 2)) {
                g.DrawLine(checkPen, 92, 517, 95, 520);
                g.DrawLine(checkPen, 95, 520, 101, 514);
            }
            using (var urlFont = new Font("Segoe UI", 13.5f, FontStyle.Bold))
            using (var urlBrush = new SolidBrush(Color.White)) {
                g.DrawString("nareshn.me ↗", urlFont, urlBrush, 116, 506);
            }

            // Save JPEG
            var codec = GetJpegCodec();
            var ep = new EncoderParameters(1);
            ep.Param[0] = new EncoderParameter(Encoder.Quality, 88L);
            bmp.Save(outPath, codec, ep);
        }
    }

    public static void GenerateSquarePhotoOg(string photoPath, string outPath) {
        int size = 600;
        using (var bmp = new Bitmap(size, size))
        using (var g = Graphics.FromImage(bmp)) {
            g.SmoothingMode = SmoothingMode.AntiAlias;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;

            using (var bgBrush = new SolidBrush(Color.FromArgb(255, 15, 23, 42))) {
                g.FillRectangle(bgBrush, 0, 0, size, size);
            }

            if (File.Exists(photoPath)) {
                using (var photo = Image.FromFile(photoPath)) {
                    // Crop/center to focus on head/shoulders
                    int srcW = photo.Width;
                    int srcH = photo.Width; // 1:1 aspect ratio focusing on top
                    g.DrawImage(photo, new Rectangle(0, 0, size, size), 0, 0, srcW, srcH, GraphicsUnit.Pixel);
                }
            }

            var codec = GetJpegCodec();
            var ep = new EncoderParameters(1);
            ep.Param[0] = new EncoderParameter(Encoder.Quality, 88L);
            bmp.Save(outPath, codec, ep);
        }
    }

    public static void GenerateProjectOg(string title, string category, string techLine, string outPath) {
        int width = 1200;
        int height = 630;
        using (var bmp = new Bitmap(width, height))
        using (var g = Graphics.FromImage(bmp)) {
            g.SmoothingMode = SmoothingMode.AntiAlias;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.TextRenderingHint = System.Drawing.Text.TextRenderingHint.ClearTypeGridFit;

            // Background
            using (var brush = new LinearGradientBrush(new Point(0, 0), new Point(width, height),
                Color.FromArgb(255, 10, 14, 24), Color.FromArgb(255, 18, 28, 48))) {
                g.FillRectangle(brush, 0, 0, width, height);
            }

            // Top accent line
            using (var pen = new Pen(Color.FromArgb(220, 229, 184, 66), 3)) { // Gold accent
                g.DrawLine(pen, 0, 0, width, 0);
            }

            // Category tag
            using (var catFont = new Font("Consolas", 12f, FontStyle.Bold))
            using (var catBrush = new SolidBrush(Color.FromArgb(255, 229, 184, 66))) {
                g.DrawString(category.ToUpper(), catFont, catBrush, 80, 80);
            }

            // Project Title
            using (var titleFont = new Font("Georgia", 52f, FontStyle.Bold))
            using (var titleBrush = new SolidBrush(Color.White)) {
                g.DrawString(title, titleFont, titleBrush, 75, 125);
            }

            // Subtitle / Developer credit
            using (var credFont = new Font("Segoe UI", 16f, FontStyle.Regular))
            using (var credBrush = new SolidBrush(Color.FromArgb(255, 203, 213, 225))) {
                g.DrawString("Engineered & Designed by Naresh N · Full Stack Developer & AI Engineer", credFont, credBrush, 80, 240);
            }

            // Tech stack pills
            using (var techFont = new Font("Consolas", 13f, FontStyle.Bold))
            using (var techBrush = new SolidBrush(Color.FromArgb(255, 56, 189, 248))) {
                g.DrawString("STACK:  " + techLine, techFont, techBrush, 80, 360);
            }

            // Card border
            using (var borderPen = new Pen(Color.FromArgb(40, 255, 255, 255), 1)) {
                g.DrawRectangle(borderPen, 50, 40, width - 100, height - 80);
            }

            // Bottom Brand mark
            using (var markFont = new Font("Segoe UI", 14f, FontStyle.Bold))
            using (var markBrush = new SolidBrush(Color.FromArgb(255, 148, 163, 184))) {
                g.DrawString("nareshn.me/projects  ·  Verified Production System", markFont, markBrush, 80, 520);
            }

            var codec = GetJpegCodec();
            var ep = new EncoderParameters(1);
            ep.Param[0] = new EncoderParameter(Encoder.Quality, 88L);
            bmp.Save(outPath, codec, ep);
        }
    }

    public static void OptimizeCertificateOg(string srcPath, string outPath) {
        if (!File.Exists(srcPath)) return;
        using (var src = Image.FromFile(srcPath)) {
            int maxW = 1200;
            float scale = (float)maxW / src.Width;
            if (scale > 1.0f) scale = 1.0f;
            int destW = (int)(src.Width * scale);
            int destH = (int)(src.Height * scale);

            using (var bmp = new Bitmap(destW, destH))
            using (var g = Graphics.FromImage(bmp)) {
                g.SmoothingMode = SmoothingMode.AntiAlias;
                g.InterpolationMode = InterpolationMode.HighQualityBicubic;
                g.PixelOffsetMode = PixelOffsetMode.HighQuality;
                g.DrawImage(src, 0, 0, destW, destH);

                var codec = GetJpegCodec();
                var ep = new EncoderParameters(1);
                // 82% quality yields ~120KB - 180KB, perfect for WhatsApp's 300KB limit
                ep.Param[0] = new EncoderParameter(Encoder.Quality, 82L);
                bmp.Save(outPath, codec, ep);
            }
        }
    }
}

