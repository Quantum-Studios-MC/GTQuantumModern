const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
const $ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');    

    GTCEuStartupEvents.registry('gtceu:material', event => {
        event.create('iron_sludge')
            .ore()
            .element(GTElements.get('iron')) 
            .colorAverage()
            .iconSet(GTMaterialIconSet.OPAL)

        event.create('copper_sludge')
            .ore()
            .color(0xB87333)
            .element(GTElements.get('copper')) 
            .colorAverage()
            .iconSet(GTMaterialIconSet.OPAL)
            
        event.create('tin_sludge')
            .ore()
            .color(0x98918D)
            .element(GTElements.get('tin')) 
            .colorAverage()
            .iconSet(GTMaterialIconSet.OPAL)

        event.create('ash_stone')
            .ingot()
            .components('1x nukacraft:ash_stone')
            .color(0xB7A59C)
            .secondaryColor(0x9A8C83)
            .iconSet(GTMaterialIconSet.DULL)
            .flags(GTMaterialFlags.GENERATE_PLATE)
            .toolStats(new ToolProperty(3.0, 2, 128, 1, [
                GTToolType.HARD_HAMMER,
                GTToolType.SAW,
                GTToolType.FILE
            ]))
    })
