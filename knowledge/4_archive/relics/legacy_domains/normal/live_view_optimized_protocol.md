---
name: live-view-optimized-protocol
description: "live view optimized protocol"
triggers: ["live view optimized protocol", "live_view_optimized_protocol", "live_view_opt"]
phase: reference
model_hint: gemini-3-flash
version: 1.0
_ohdy_wrapper: |-
  <dna_node>
  v: 1.0
  n: live_view_opt
  mandate: "ZERO_TOKEN_FIRST"
  strategies:
    1: 
      id: headless_disc
      val: "Text-only crawl (CURL/read_url) before visual subagent."
    2:
      id: dom_stripping
      val: "Safe-Shield Protocol: Strip (script, style, svg, path, nav, footer, header) | Preserve (main, article, p, h1-h6, table, a, li, video-metadata)."
    3:
      id: region_pixel_cap
      val: "Local crop of Snipaste (F1) shots to target coordinates."
    4:
      id: loc_ocr_relay
      val: "Offload visual text extraction to local G4/Windows-OCR."
    5:
      id: batch_action_buf
      val: "Queue 5+ browser actions (Scroll->Find->Report) per subagent turn."
    6:
      id: inc_dom_diffs
      val: "Only send changed DOM nodes to the AI in subsequent turns."
    7:
      id: url_schema_ext
      val: "Direct extraction from raw source (e.g., ytInitialData JSON)."
    8:
      id: viz_anchor_chk
      val: "Local image hashing (MD5) to skip redundant captures."
    9:
      id: trans_priority
      val: "Pull subtitles/transcripts over raw video frame analysis."
    10:
      id: ztv_proxy
      val: "Local G4 summarizes Snipaste images before Gemini seeing."
    11:
      id: jump_cut_syn
      val: "4-point video spot check (Start, Mid1, Mid2, End) via snip."
    12:
      id: action_queueing
      val: "Multi-step JS scripts sent as single tool commands."
    13:
      id: silent_cli_ext
      val: "Local CLI extraction (yt-dlp) for YouTube transcripts/metadata."
    14:
      id: lazy_view_filter
      val: "Intersection Observer JS: Only send DOM of visible elements."
    15:
      id: resource_kill
      val: "Conditional (Smart-Guess): Block for Research | Preserve for Design | EXCEPTION: Auto-Preserve if 'Captcha' or 'IconCaptcha' found."
    16:
      id: shadow_crawl
      val: "DISABLED_BY_DEFAULT: Only engage if user explicitly requests 'Full Depth' or 'Deep Crawl'."
    17:
      id: event_pulse
      val: "Trigger vision pulse on state-change listeners instead of timers."
    18:
      id: coord_id_inject
      val: "Inject unique IDs into nodes for precise 1-turn interaction."
    19:
      id: density_heuristic
      val: "Locally discard low-value nav/footer nodes before AI review."
    20:
      id: region_snip
      val: "Target specific window/coordinates for Snipaste (F1) capture."
    21:
      id: markdown_sanitizer
      val: "Remove repetitive site-wide elements (footers) via local regex."
    22:
      id: url_reducer_exp
      val: "Direct link expansion to bypass tracking and tracking redirects."
    23:
      id: jump_cut_scene
      val: "Capture only frame changes >20% during video learning."
    24:
      id: action_macro
      val: "Send multi-step JS 'Macros' (Scroll->Find->Click) as 1 tool call."
    25:
      id: parallel_tab_syn
      val: "Synthesis of 5+ tabs in a single reasoning turn."
    26:
      id: phoenix_reentry
      val: "Resume Interrupted Missions: If context lost/window closed, AI must auto-navigate to last checkpoint URL."
  metrics: [token_roi:99%, velocity:12x_boost, fidelity:parity]
  l: |-
  </dna_node>
---

# LIVE VIEW OPTIMIZED PROTOCOL (V1.0)
