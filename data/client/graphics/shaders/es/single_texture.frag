#version 300 es

out mediump vec4 aColor;
in mediump vec2 TexCoords;
uniform sampler2D texture0;

void main()
{
    aColor = texture(texture0, TexCoords);
    if (aColor.a < 0.01)
    {
        discard;
    }
}