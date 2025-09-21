    GTCEuStartupEvents.registry('gtceu:material', event => {
        event.create('ultracite')
            .gem() 
            .element(GTElements.get('ultracite')) 
            .flags([GTMaterialFlags.GENERATE_PLATE])
            .color(0xb4cc2c).iconSet(GTMaterialIconSet.OPAL)
    })