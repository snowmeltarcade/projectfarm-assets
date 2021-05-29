#version 330 core

layout (location = 0) in vec2 aPos;
// we don't want to change the vertex data based on the material,
// so accept this, but ignore it
layout (location = 1) in vec2 aTexCoords;

void main()
{
    gl_Position = vec4(aPos, 0, 1);
}