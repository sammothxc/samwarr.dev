---
title: "OneChipBook-12 FPGA platform"
description: "Multi-CPU swappable architecture on an Altera Cyclone I. VGA, PS/2 keyboard, and audio bring-up complete; working toward a fully usable retro computing platform."
category: hardware
tags: [fpga, verilog, retro]
year: "ongoing"
lastUpdated: "2025-11-01"
---

## Where this is going

The OneChipBook-12 is an obscure 2010-era FPGA "laptop" — Altera Cyclone I, no peripherals to speak of, designed as a teaching platform that never quite caught on. I picked one up cheap because the form factor is exactly what I want for a soft-CPU experimentation rig: integrated keyboard, integrated display, integrated power. No breadboard mess.

The goal is a swappable multi-CPU platform: PicoRV32 first (because it's small and known-good), then port to 6502 and Z80 for retro fun, then 68000, then maybe a custom RV32I to learn the toolchain end-to-end.

## What works so far

- **VGA pipeline** — character rendering with an 8×16 font ROM, 80-column text mode running off the PLL
- **PS/2 keyboard receiver** — scan code decoder feeding into a small FIFO
- **PLL configuration** — multiplying the 21.47727 MHz crystal up to a useful pixel clock
- **Audio** — basic square-wave generation, eventually want to drive it from a memory-mapped register

## What's in progress

Wiring the PicoRV32 core to the VGA framebuffer and keyboard FIFO, then bringing up a minimal program ROM with enough firmware to echo keystrokes to the display. After that, swap to a 6502 core and see what breaks.

I'll write this up properly once the first CPU is running.
