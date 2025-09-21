GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((id, vein) => {
        console.log("Modifying vein: " + id)
        vein.dimensions('nukacraft:nuclear_wasteland')
    })
})