ServerEvents.tags('item', event => {
  event.add('forge:tools/hammers', '#forge:hammers')
  event.add('forge:tools/crafting_files', '#forge:files')
  event.add('forge:tools/saws', '#forge:saws')
})

ServerEvents.recipes(event => {
  event.replaceInput({}, '#forge:hammers', '#forge:tools/hammers')
  event.replaceInput({}, '#forge:files', '#forge:tools/crafting_files')
  event.replaceInput({}, '#forge:saws', '#forge:tools/saws')
})

ServerEvents.tags('item', event => {

  event.removeAllTagsFrom('nukacraft:aluminium_nugget');
  event.removeAllTagsFrom('nukacraft:alumi_ingot');
  event.removeAllTagsFrom('nukacraft:steel');
  event.removeAllTagsFrom('nukacraft:steel_nugget');
  event.removeAllTagsFrom('nukacraft:silver');
  event.removeAllTagsFrom('nukacraft:lead');
});