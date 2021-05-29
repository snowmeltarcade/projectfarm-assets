#version 300 es

layout (location = 0) in vec2 aPos;
layout (location = 1) in vec2 aTexCoords;

out mediump vec2 TexCoords;

void main()
{
    gl_Position = vec4(aPos, 0, 1);
    TexCoords = vec2(aTexCoords.x, aTexCoords.y);
}