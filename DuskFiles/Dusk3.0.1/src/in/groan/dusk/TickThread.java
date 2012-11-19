package in.groan.dusk;
import in.groan.dusk.object.entity.Entity;
import in.groan.dusk.object.entity.Mob;

public class TickThread implements Runnable {
	DuskEngine engGame;
	long lngTime = System.currentTimeMillis(), lngPause = 0;
	int tick=0;
	
	TickThread(DuskEngine inGame) {
		engGame = inGame;
	}
	
	@SuppressWarnings("static-access")
	public void run() {
		Entity thnStore;
		Mob mobStore;
		Condition cndStore;
		Script scrStore;
		int i,
			i2;
		
		while(true) {
			try {
				//1000 milliseconds(1 second) per tick
				lngPause = 1000L-(System.currentTimeMillis()-lngTime);
				if (lngPause > 0)
					Thread.currentThread().sleep(lngPause);
				lngTime = System.currentTimeMillis();
				
				for (i=0;i<engGame.vctMobs.size();i++) {
					mobStore = (Mob)engGame.vctMobs.elementAt(i);
					if (mobStore.intLocX == -6) {
						mobStore.stats.incHP();
						if (mobStore.stats.getHP() > -1) {
							mobStore.changeLocBypass(mobStore.originalX,mobStore.originalY);
							mobStore.stats.setHP(mobStore.stats.getMAXHP());
						}
					} else {
						try {
							if ((engGame.BLN_AI ) && ( mobStore.BLN_LOS ) && (mobStore.fctFaction != null)) {
								mobStore.fctFaction.runAI(mobStore);
							}
						} catch(Exception e) {
							mobStore.BLN_LOS=false;
							engGame.LOG.printError("TickThread.run():While trying to runAI for mob \""+mobStore.NAME+"\".", e);
						}
						synchronized(mobStore.vctMovement) {
							if(mobStore.vctMovement.size() > 0) {
								try {
									String strStore = (String)mobStore.vctMovement.elementAt(0);
									char charStore = strStore.charAt(0);
									switch(charStore) {
										case 'n':
											mobStore.moveN();
											break;
										case 's':
											mobStore.moveS();
											break;
										case 'w':
											mobStore.moveW();
											break;
										case 'e':
											mobStore.moveE();
											break;
									}
									mobStore.vctMovement.removeElement(mobStore.vctMovement.elementAt(0));
								}catch(Exception e) {
									engGame.LOG.printError("TickThread.run():At movement tick for mobs", e);
								}
							}
						}
					}
				}
				
				for (i=0;i<engGame.vctCheckConditions.size();i++) {
					thnStore = (Entity)engGame.vctCheckConditions.elementAt(i);
					i2=0;
					while (i2<thnStore.vctConditions.size()) {
						cndStore = (Condition)thnStore.vctConditions.elementAt(i2);
						if (cndStore.intTicksPast >= cndStore.intOccurance) {
							try {
								if (cndStore.strOnOccurance != null) {
									scrStore = new Script("scripts/"+cndStore.strOnOccurance,engGame,false);
									scrStore.varVariables.addVariable("trigger",thnStore);
									scrStore.varVariables.addVariable("condition",cndStore.NAME);
									scrStore.runScript();
									scrStore.close();
								}
								if (cndStore.intDuration > 0)
									cndStore.intDuration--;
								if (cndStore.intDuration == 0) {
									try {
										if (cndStore.strOnEnd != null) {
											scrStore = new Script("scripts/"+cndStore.strOnEnd,engGame,false);
											scrStore.varVariables.addVariable("trigger",thnStore);
											scrStore.varVariables.addVariable("condition",cndStore.NAME);
											scrStore.runScript();
											scrStore.close();
										}
										thnStore.vctConditions.removeElementAt(i2);
									} catch(Exception e) { }
								} else
									i2++;
								cndStore.intTicksPast=1;
							} catch(Exception e) {
								engGame.LOG.printError("ThreadTicks.run():While executing occurance of condition "+cndStore.NAME, e);
								i2++;
							}
						} else {
							cndStore.intTicksPast++;
							i2++;
						}
					}
				}
				
				if (tick > 120)
					tick = 0;
				tick++;
			} catch(Exception e) {
				engGame.LOG.printError("ThreadTicks.run()", e);
			}
		}
	}
}