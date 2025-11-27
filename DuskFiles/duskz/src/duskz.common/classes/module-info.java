
module duskz.common {
	requires java.desktop;
	requires java.logging;
	requires jakarta.xml.bind;

	exports duskz.protocol;
	exports duskz.util;
	exports duskz.map;
	exports duskz.map.io;
}
