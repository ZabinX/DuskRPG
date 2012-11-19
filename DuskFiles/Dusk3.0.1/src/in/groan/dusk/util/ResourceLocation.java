/**
 * 
 */
package in.groan.dusk.util;

import java.io.InputStream;
import java.net.URL;

public interface ResourceLocation {
	public InputStream getResourceAsStream(String ref);
	public URL getResource(String ref);
}