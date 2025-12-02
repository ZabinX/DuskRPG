public class SendData extends Object
{
	String strData;
    byte bytData;
    long lngData;
    int nDataType;

	public static final int STRING = 0;
	public static final int BYTE   = 1;
	public static final int LONG   = 2;

    public SendData(String strStore)
    {
		strData = strStore;
		nDataType = STRING;
    }

    public SendData(byte bytStore)
    {
		bytData = bytStore;
        nDataType = BYTE;
    }

    public SendData(long lngStore)
    {
		lngData = lngStore;
        nDataType = LONG;
    }
}
