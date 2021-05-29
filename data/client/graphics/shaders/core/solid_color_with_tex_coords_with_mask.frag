#version 330 core

out vec4 aColor;
in vec2 TexCoords;

uniform sampler2D texture0; // mask
uniform vec4 color;

void main()
{
    vec4 maskColor = texture(texture0, TexCoords);
    if (maskColor.a < 0.01)
    {
        discard;
    }

    aColor = color;
}