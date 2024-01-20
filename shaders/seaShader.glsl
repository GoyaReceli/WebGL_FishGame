#ifdef VERTEX_SHADER
// ------------------------------------------------------//
// ----------------- VERTEX SHADER ----------------------//
// ------------------------------------------------------//

attribute vec3 a_position; // the position of each vertex
varying vec3 v_position;

void main() {
    v_position = a_position;
    gl_Position = vec4(a_position, 1);
}

#endif
#ifdef FRAGMENT_SHADER
// ------------------------------------------------------//
// ----------------- Fragment SHADER --------------------//
// ------------------------------------------------------//

precision highp float; //float precision settings

varying vec3 v_position;

void main(void) {
    gl_FragColor = vec4(0.02, 0.07, log(v_position.y + 1.3), 1);
}

#endif
