#version 330 core

out vec4 aColor;
in vec2 TexCoords;

uniform vec4 color;
uniform sampler2D texture0;

void main()
{
    aColor = texture(texture0, TexCoords) * color;
    if (aColor.a < 0.01)
    {
        discard;
    }
}