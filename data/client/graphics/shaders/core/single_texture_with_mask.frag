#version 330 core

out vec4 aColor;
in vec2 TexCoords;

uniform vec4 color;
uniform sampler2D texture0; // base texture
uniform sampler2D texture1; // mask

void main()
{
    vec4 baseColor = texture(texture0, TexCoords) * color;
    vec4 maskColor = texture(texture1, TexCoords);
    if (baseColor.a < 0.01 || maskColor.a < 0.01)
    {
        discard;
    }

    aColor = baseColor;
}