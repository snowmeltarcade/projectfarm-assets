#version 300 es

out mediump vec4 aColor;
in mediump vec2 TexCoords;

uniform sampler2D texture0; // mask
uniform mediump vec4 color;

void main()
{
    mediump vec4 maskColor = texture(texture0, TexCoords);
    if (maskColor.a < 0.01)
    {
        discard;
    }

    aColor = color;
}