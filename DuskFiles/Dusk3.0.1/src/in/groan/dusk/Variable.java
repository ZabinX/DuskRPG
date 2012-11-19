package in.groan.dusk;

public class Variable {
	String strName;
	public Object objData;
	byte bytType;
	
	//0-Number
	//1-String
	//2-LivingThing
	//3-Item
	
	boolean isNumber()
	{
		if (bytType == 0)
			return true;
		return false;
	}
	
	boolean isString()
	{
		if (bytType == 1)
			return true;
		return false;
	}
	
	boolean isLivingThing()
	{
		if (bytType == 2)
			return true;
		return false;
	}
	
	boolean isItem()
	{
		if (bytType == 3)
			return true;
		return false;
	}
}
