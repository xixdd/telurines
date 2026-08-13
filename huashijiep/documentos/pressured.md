## Pressure dynamics ( 压力)

Note: See "master size" [here.](interfacemap.html?file=saving.md)
___
![](./images/bs/pr/0pr.webp)
___

Here I'll explain the settings for pressure dynamics, this is very similar to the IbisPaint settings with the same name. And what this does is for example, the more pressure you apply, the thicker your stroke is and, if you apply low pressure, the stroke will become weaker in terms of thickness, opacity, flow, or all of them. 

It's also imperative to mention that, for us who draw only using the finger, we can toggle figure J on at the very end of the section.

![](./images/bs/pr/1pr.webp)

And what it does is replacing pressure with speed. That is, if you don't have anything that detects pressure; for example, you tablet is broken or simply doesn't do that, or again, you use your finger, then it will read your speed instead. 
The default settings are, the more pressure, the bigger the nib. If you use speed, then the slower your stroke, the bigger the nib.

![](./images/bs/pr/2pr.webp)

Note: I am going to say pressure from now on, but remember what I actually mean is "pressure or speed."

### 1. Pressure affects size (大小压力)

At the top of the section we'll find our first set of settings. A selection menu with 2 options (A), and 2 sliders (B & C.)
This, as the name tells, it to activate the size dynamism based on pressure, which is the simplest one.

![](./images/bs/pr/3pr.webp)

In (A), we are gonna have these 2 options, it is asking you how to measure the pressure: using either an absolute value (a-2-绝对值), or percentage (a-1-百分比). To see what those two do, we must see the slider (B) first, which refers to the minimum size of the nib. This is: <mark>Under the effects of pressure dynamics, what is the smallest size the nib can get.</mark> 

### Pressure measure for minimum diameter: Absolute value
`最小直径——绝对值`
So then, if you select "Absolute value," (a-2) you can chose a "fixed" number, pixels in this case. This means that if, for example you set this absolute value to 10 pixels, the nib won't get any smaller than that idepently of the master size you set in the [work screen](readerhsp.html?interfacemap=.md).
However, this is in theory. Because in practice, this number is automatically modified every time you change the master size. So I don't really recommend using this unless you're gonna work with a fixed master size because at the end, it's kinda the same but less precise.

![](./images/bs/pr/4pr.webp)

### Pressure measure for minimum diameter: Percentage 
`最小直径——百分比`
If you chose "Percentage," (a-1) it's gonna be the best option. You adjust the minimum size slider (C) to set a percentage and it's gonna be realative to the master size, you can change it freely and the minimum size will always keep the relation consistently and perfectly.

![](./images/bs/pr/5pr.webp)

### Slider (C): Pressure sensitivity.

The simplest one here. It controls the intensity of the effect. If you set it to 0, it won't detect pressure; if you set it to 100, the effects will be the most obvious.

![](./images/bs/pr/6pr.webp)

Also for this one, if you set the slider to a negative number, it will work the opposite. That is, more stroke pressure equals smaller nib diameter.

___
___

## Flow pressure (流量压力)

![](./images/bs/pr/7pr.webp)

Figures D & E are exactly the same: Minimum value, and pressure effect/sensitivity, but for flow, of course.

Figure F, toggles the smoothing of the flow, making it look less harsh, more blended and soft.

___
___

## Opacity (传递)

Yeah the same thing but for opacity. I didn't add a picture here because it's only one slider, it's right after figure F.

## Finger Pressure (手指压力)

![](./images/bs/pr/8pr.webp)

The last set of configurations. One slider (Figure H,) and 2 toggles (Figures I & J.) 

1. H) Sensitivity of the finger pressure. I recommend leaving this one at 100% always.
2. I) Fade in and out the effects. For smoother appearance.
3. J) Stroke speed replaces pressure.


___
___
-Xi


