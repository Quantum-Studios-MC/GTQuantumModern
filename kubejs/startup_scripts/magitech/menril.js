GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('menril')
        .gem() 
        .element(GTElements.get('menril')) 
        .flags([GTMaterialFlags.GENERATE_PLATE])
        .color(0x196d7e).iconSet(GTMaterialIconSet.OPAL)

    event.create('raw_menril')
        .dust()  
        .color(0x196d7e).iconSet(GTMaterialIconSet.OPAL)

    event.create('red_phosphorus')
        .dust()
        .ore()
        .element(GTElements.get('phosphorus')) 
        .colorAverage().iconSet(GTMaterialIconSet.LIGNITE)
        
})