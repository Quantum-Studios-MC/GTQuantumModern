    GTCEuStartupEvents.registry('gtceu:material', event => {
        event.create('iron_sludge')
            .ore()
            .element(GTElements.get('iron')) 
            .colorAverage().iconSet(GTMaterialIconSet.OPAL)

        event.create('copper_sludge')
            .ore()
            .element(GTElements.get('copper')) 
            .colorAverage().iconSet(GTMaterialIconSet.OPAL)
            
        event.create('tin_sludge')
            .ore()
            .element(GTElements.get('tin')) 
            .colorAverage().iconSet(GTMaterialIconSet.OPAL)
    })