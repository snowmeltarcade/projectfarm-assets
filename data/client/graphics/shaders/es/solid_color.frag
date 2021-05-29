#version 300 es

out mediump vec4 aColor;

uniform vec4 color;

void main()
{
    aColor = color;
}