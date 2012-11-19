import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.util.Vector;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.StringTokenizer;
import java.applet.*;
import java.net.*;

public class HelpFrame extends Frame
{
	TextArea txtOutput;

	public HelpFrame()
	{
		txtOutput = new TextArea();
		txtOutput.setEditable(false);
	}
	

	public void initComponents() throws Exception
	{
		setLocation(new java.awt.Point(0, 0));
		setTitle("Help");
		setLayout(new BorderLayout());

		add(txtOutput, BorderLayout.CENTER);

		setLocation(20,20);
		setSize(500,600);

		addWindowListener(new java.awt.event.WindowAdapter() {
			public void windowClosing(java.awt.event.WindowEvent e) {
				thisWindowClosing(e);
			}
		});
	}

  	private boolean mShown = false;
  	
	public void addNotify() 
	{
		super.addNotify();
		
		if (mShown)
			return;

		mShown = true;
	}
	
	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}
}
