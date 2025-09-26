import java.awt.Dimension;
import java.awt.Image;
import javax.swing.ImageIcon;
import javax.swing.JToggleButton;
import javax.swing.border.EmptyBorder;

public class CustomButton extends JToggleButton {

    public CustomButton() {
        super();
        setBorder(new EmptyBorder(0, 0, 0, 0));
        setMargin(new java.awt.Insets(0, 0, 0, 0));
        setContentAreaFilled(false);
        setFocusPainted(false);
        setPreferredSize(new Dimension(36, 36));
    }

    public void setImages(Image upImage, Image downImage) {
        if (upImage != null) {
            setIcon(new ImageIcon(upImage));
        }
        if (downImage != null) {
            setSelectedIcon(new ImageIcon(downImage));
            setPressedIcon(new ImageIcon(downImage));
        }
    }
}