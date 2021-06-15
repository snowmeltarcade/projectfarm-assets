#version 300 es

out mediump vec4 aColor;
in mediump vec2 TexCoords;

uniform mediump vec4 color;
uniform sampler2D texture0; // base texture
uniform sampler2D texture1; // mask

void main()
{
    mediump vec4 baseColor = texture(texture0, TexCoords) * color;
    mediump vec4 maskColor = texture(texture1, TexCoords);
    if (baseColor.a < 0.01 || maskColor.a < 0.01)
    {
        discard;
    }

    aColor = baseColor;
}