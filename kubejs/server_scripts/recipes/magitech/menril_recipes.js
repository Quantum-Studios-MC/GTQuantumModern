ServerEvents.recipes(event => {
event.recipes.gtceu.chemical_reactor("red_phosphorus_dust")
.itemInputs("gtceu:ash_dust")
.itemInputs("gtceu:small_bone_dust")
.itemOutputs("gtceu:red_phosphorus_dust")
.inputFluids("gtceu:oxygen 1000")
.EUt(8)
.duration(40)

event.recipes.gtceu.primitive_blast_furnace("menril_gem")
.itemInputs("gtceu:menril_dust")
.itemInputs("gtceu:red_phosphorus_dust")
.itemInputs("2x minecraft:coal")
.itemOutputs("gtceu:menril_gem")
.duration(1200)

event.recipes.gtceu.extractor("raw_menril_dust")
.itemInputs("integrateddynamics:menril_log")
.itemOutputs("gtceu:raw_menril_dust")
.EUt(8)
.duration(120)

event.recipes.gtceu.alloy_smelter("menril_alloys")
.itemInputs("gtceu:raw_menril_dust")
.itemInputs("gtceu:red_phosphorus_dust")
.itemOutputs("gtceu:menril_dust")
.EUt(8)
.duration(40)

// stuffs

event.shaped("integrateddynamics:variable", [
    "ABA",
    "BCB",
    "ABA"
], {
    A: "gtceu:silver_screw",
    B: "gtceu:menril_plate",
    C: "#forge:tools/hammers"
})

})
