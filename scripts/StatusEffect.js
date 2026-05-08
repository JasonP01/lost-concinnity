Events.run(Trigger.update, setStatus);

function setStatus() {
    if(Vars.state.isMenu()) return;

    if(Mathf.chance(0.02) && Vars.player.unit() != null) { 
        let restr = Vars.content.getByName(ContentType.status, "lost-restrained");
        if(restr) Vars.player.unit().apply(restr, 300);
    };

    if(!Vars.headless) {
        Groups.unit.each(unit => {
            if(!unit.inFogTo(Vars.player.team()) && unit.healthf() <= 0.25) {
                Tmp.v1.rnd(Mathf.range(unit.type.hitSize * 0.5));
                Fx.fireSmoke.at(unit.x + Tmp.v1.x, unit.y + Tmp.v1.y);
            }
        });
    }
}
