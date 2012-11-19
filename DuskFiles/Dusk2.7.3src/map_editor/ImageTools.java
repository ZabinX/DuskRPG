import java.awt.*;
import java.awt.image.*;

public class ImageTools extends Object
{
    public static Image makeColorTransparent(Image im, final Color color)
	{
        ImageFilter filter = new RGBImageFilter()
		{
			// Alpha bits are set to opaque, regardless of what they
			// might have been already.
			public int markerRGB = color.getRGB() | 0xFF000000;

			public final int filterRGB(int x, int y, int rgb)
			{
				if ( ( rgb | 0xFF000000 ) == markerRGB )
				{
					// Mark the alpha bits as zero - transparent, but
					// preserve the other information about the color
					// of the pixel.
					return 0x00FFFFFF & rgb;
				}
				else
				{
					// leave the pixel untouched
					return rgb;
				}
			}
		}; // end of inner class

		// Setup to use transparency filter
		ImageProducer ip = new FilteredImageSource(im.getSource(), filter);

		// Pull the old image thru this filter and create a new one
		return Toolkit.getDefaultToolkit().createImage(ip);
	}

	public static Image makeImageTransparent(Image im)
	{
        ImageFilter filter = new RGBImageFilter()
		{
			public final int filterRGB(int x, int y, int rgb)
			{
				// Mark the alpha bits as 7F - 50% transparent, but
				// preserve the other information about the color
				// of the pixel.
				return 0x7FFFFFFF & rgb;
			}
		}; // end of inner class

		// Setup to use transparency filter
		ImageProducer ip = new FilteredImageSource(im.getSource(), filter);

		// Pull the old image thru this filter and create a new one
		return Toolkit.getDefaultToolkit().createImage(ip);
	}
}