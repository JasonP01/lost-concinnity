Events.run(Trigger.update, () => {
   
    if(Vars.state.isMenu()) return;

    if(Mathf.chance(0.02) && Vars.player.unit()) { 
        Vars.player.unit().apply(StatusEffects.restrained, 60);
    }

    Groups.unit.each(unit => {

        if(!Vars.headless && unit.healthf() <= 0.25) {
            Tmp.v1.rnd(unit.type.hitSize * 0.5);
            
            Fx.burning.at(unit.x + Tmp.v1.x, unit.y + Tmp.v1.y);
        }
    });
});
