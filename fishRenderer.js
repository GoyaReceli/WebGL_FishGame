"use strict";

class FishRenderer extends Renderer {

    drawModel(model, camera, shaderData, fishPosZ, speed){

        // don't draw if the model hasn't been fully loaded yet (vertex count is 0)
        if(model.mesh.indexCount === 0) return;

        // activate this shader program
        gl.useProgram(this.program);

        // set the arrtibute arrays and uniform data for this programs vertex and
        // fragment shader based on the models buffer data and material
        this.setVertexAttributeArrays(model);
        this.setUniformData(model, camera, shaderData, fishPosZ, speed);

        // draw call using index based triangle assembly (elements)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.mesh.bufIndex);
        gl.drawElements(model.mesh.drawMode, model.mesh.indexCount, gl.UNSIGNED_SHORT, 0);

        return this;
	}

    setUniformData(model, camera, shaderData, fishPosZ, speed){
        super.setUniformData(model, camera, shaderData);

        let timeLoc = gl.getUniformLocation(this.program, "u_Time");
        gl.uniform1f(timeLoc, shaderData.time);

        let fishPosLoc = gl.getUniformLocation(this.program, "u_fishPos");
        gl.uniform1f(fishPosLoc, fishPosZ);

        let speedLoc = gl.getUniformLocation(this.program, "u_speed");
        gl.uniform1f(speedLoc, speed);
    }
}
