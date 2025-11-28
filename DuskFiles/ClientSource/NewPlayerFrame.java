import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;

public class NewPlayerFrame extends JFrame {
    private JComboBox<String> raceComboBox;
    private JButton createButton;
    private Dusk duskClient;
    private ListMessage pendingQueries;
    private String username;
    private String password;

    public NewPlayerFrame(Dusk duskClient, ListMessage pendingQueries, String username, String password) {
        this.duskClient = duskClient;
        this.pendingQueries = pendingQueries;
        this.username = username;
        this.password = password;

        setTitle("Create New Player");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        initComponents();
    }

    private void initComponents() {
        setLayout(new BoxLayout(getContentPane(), BoxLayout.Y_AXIS));

        ListMessage raceQuery = (ListMessage) pendingQueries.value.get(0);
        List<String> races = raceQuery.getStringList(DuskProtocol.FIELD_QUERY_OPTIONS);

        raceComboBox = new JComboBox<>(races.toArray(new String[0]));
        createButton = new JButton("Create");

        createButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String selectedRace = (String) raceComboBox.getSelectedItem();

                ListMessage response = new ListMessage(DuskProtocol.MSG_AUTH);
                response.add(DuskProtocol.FIELD_AUTH_PLAYER, username);
                response.add(DuskProtocol.FIELD_AUTH_PASS, password);
                ListMessage fields = new ListMessage(DuskProtocol.FIELD_AUTH_NEWPLAYER);
                fields.add(new DuskMessage.StringMessage(0, selectedRace));
                response.add(fields);
                duskClient.send(response);

                setVisible(false);
                dispose();
            }
        });

        add(new JLabel("Choose your race:"));
        add(raceComboBox);
        add(createButton);
    }
}
