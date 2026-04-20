var SETDEX_SV = {
  "Fields with description and/or example of usage": {
    "": {
      "level": null,
      "ivs": null,
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "- Name",
        "- Pic",
        "- Class (if not specified, PkMn Trainer will be used)",
        "- Gender (Male/Female, affects random gender weights of party if not specified)",
        "- Music",
        "- Items (Some Item / Another Item / Third Item)",
        "- Battle Type (Singles / Doubles, defaults to Singles)",
        "- AI (Ai Flag / Another Flag / Third Flag / ...",
        "- Mugshot (enable Mugshots during battle transition",
        "- Starting Status (see include/constants/battle.h for values)"
      ],
      "index": 0
    }
  },
  "Pokemon are then specified using the Showdown Export format.": {
    "": {
      "level": null,
      "ivs": null,
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1
    }
  },
  "Required fields for Pokemon:": {
    "": {
      "level": null,
      "ivs": null,
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "- Species (Either as SPECIES_ABRA or Abra)"
      ],
      "index": 2
    }
  },
  "Optional fields for Pokemon:": {
    "": {
      "level": null,
      "ivs": null,
      "item": null,
      "ability": null,
      "nature": "",
      "teraType": null,
      "status": null,
      "moves": [
        "- Level (Number between 1 and 100, defaults to 100)",
        "- Ability (Ability Name or ABILITY_ABILITY_NAME)",
        "- IVs (0 HP / 1 Atk / 2 Def / 3 SpA / 4 SpD / 5 Spe, defaults to all 31)",
        "- EVs (252 HP / 128 Spe / 48 Def, defaults to all 0, is not capped at 512 total)",
        "- Ball (Poke Ball or ITEM_POKE_BALL, defaults to Poke Ball)",
        "- Happiness (Number between 1 and 255)",
        "- Shiny (Yes/No, defaults to No)",
        "- Dynamax Level (Number between 0 and 10, default 10, also sets \"shouldDynamax\" to True)",
        "- Gigantamax (Yes/No, sets to Gigantamax factor)",
        "- Tera Type (Set to a Type, either Fire or TYPE_FIRE, also sets \"shouldTerastal\" to True)",
        "oves are defined with a - (dash) followed by a single space, then the move name.",
        "ither \"- Tackle\" or \"- MOVE_TACKLE\" works. One move per line."
      ],
      "index": 3
    }
  },
  "Default IVs and Level can be changed in the \"main\" function of tools/trainerproc/main.c": {
    "": {
      "level": null,
      "ivs": null,
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 4
    }
  },
  "This file is processed with a custom preprocessor.": {
    "": {
      "level": null,
      "ivs": null,
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 5
    }
  },
  "/*": {
    "": {
      "level": null,
      "ivs": null,
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 6
    }
  },
  "/*Comments can also be on a single line*/": {
    "": {
      "level": null,
      "ivs": null,
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 7
    }
  },
  "Geodude": {
    "Hiker SAWYER": {
      "level": "26",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1791
    },
    "Youngster JOSH": {
      "level": "10",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Tackle"
      ],
      "index": 621
    },
    "Hiker TRENT": {
      "level": "30",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1265
    },
    "Hiker LENNY": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1241
    },
    "Hiker LUCAS": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1243
    },
    "Hiker ALAN": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1245
    },
    "Hiker CLARK": {
      "level": "8",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1248
    },
    "Hiker ERIC": {
      "level": "20",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1249
    },
    "Hiker MIKE": {
      "level": "16",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1255
    },
    "Hiker DEVAN": {
      "level": "8",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1504
    }
  },
  "Poochyena": {
    "Team Aqua GRUNT": {
      "level": "27",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1171
    },
    "Pkmn Breeder GABRIELLE": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 18
    },
    "Youngster CALVIN": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 618
    },
    "Pkmn Breeder ISAAC": {
      "level": "11",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1041
    },
    "Team Magma GRUNT": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1450
    },
    "Magma Admin TABITHA": {
      "level": "20",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1173
    },
    "Hiker MIKE": {
      "level": "10",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Bite",
        "Scary Face"
      ],
      "index": 1253
    },
    "Rich Boy DAWSON": {
      "level": "8",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1406
    },
    "Pkmn Breeder PAT": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1527
    }
  },
  "Zubat": {
    "Team Aqua GRUNT": {
      "level": "27",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1170
    },
    "Team Magma GRUNT": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1455
    },
    "Magma Admin TABITHA": {
      "level": "30",
      "ivs": {
        "hp": 9,
        "at": 9,
        "df": 9,
        "sa": 9,
        "sd": 9,
        "sp": 9
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1461
    },
    "Magma Leader MAXIE": {
      "level": "24",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1186
    }
  },
  "Carvanha": {
    "Team Aqua GRUNT": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 349
    },
    "Aqua Admin SHELLY": {
      "level": "28",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 60
    },
    "Beauty TIFFANY": {
      "level": "39",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 252
    },
    "Swimmer M LUIS": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 282
    },
    "Swimmer M TONY": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 289
    },
    "Swimmer M MATTHEW": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 291
    },
    "Swimmer M DAVID": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 293
    },
    "Swimmer M ROLAND": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 296
    },
    "Swimmer M DEAN": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 302
    },
    "Fisherman BARNY": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 673
    },
    "Fisherman ELLIOT": {
      "level": "30",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 685
    },
    "Swimmer M LEONARDO": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1145
    },
    "Fisherman HENRY": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1351
    },
    "Sis And Bro LILA & ROY & Sis And Bro LILA & ROY": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1394
    },
    "Fisherman CHRIS": {
      "level": "23",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1404
    }
  },
  "Skitty": {
    "Pkmn Breeder GABRIELLE": {
      "level": "33",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1808
    },
    "Pokefan MIGUEL": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 584
    },
    "Pokefan COLTON": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Assist",
        "Charm",
        "Feint Attack",
        "Heal Bell"
      ],
      "index": 581
    },
    "Picnicker MARTHA": {
      "level": "23",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 895
    },
    "Pkmn Breeder LYDIA": {
      "level": "22",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1084
    },
    "Lass ROBIN": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1206
    }
  },
  "Zigzagoon": {
    "Pkmn Breeder GABRIELLE": {
      "level": "31",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1804
    },
    "Tuber M RICKY": {
      "level": "13",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sand Attack",
        "Headbutt",
        "Tail Whip",
        "Surf"
      ],
      "index": 122
    },
    "Lady CINDY": {
      "level": "11",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Tackle",
        "Tail Whip"
      ],
      "index": 235
    },
    "Rich Boy WINSTON": {
      "level": "7",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 262
    },
    "Camper ETHAN": {
      "level": "26",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 396
    },
    "Sr And Jr KATE & JOY & Sr And Jr ANNA & MEG": {
      "level": "15",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Growl",
        "Tail Whip",
        "Headbutt",
        "Odor Sleuth"
      ],
      "index": 564
    },
    "Sr And Jr ANNA & MEG & Sr And Jr ANNA & MEG": {
      "level": "31",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Growl",
        "Tail Whip",
        "Headbutt",
        "Odor Sleuth"
      ],
      "index": 568
    },
    "Winstrate VICTOR": {
      "level": "16",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 575
    },
    "Youngster BEN": {
      "level": "17",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Headbutt",
        "Sand Attack",
        "Growl",
        "Thunderbolt"
      ],
      "index": 625
    },
    "Youngster EDDIE": {
      "level": "16",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 643
    },
    "Youngster ALLEN": {
      "level": "4",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 644
    },
    "Youngster DEMETRIUS": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 728
    },
    "Pkmn Breeder ISAAC": {
      "level": "11",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1039
    },
    "Lass TIANA": {
      "level": "4",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1188
    },
    "Rich Boy DAWSON": {
      "level": "8",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1405
    },
    "Lady SARAH": {
      "level": "8",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1408
    },
    "Youngster DEANDRE": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1438
    },
    "Pkmn Breeder MYLES": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1524
    }
  },
  "Lotad": {
    "Pkmn Breeder GABRIELLE": {
      "level": "31",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1805
    },
    "Twins GINA & MIA & Twins MIU & YUKI": {
      "level": "6",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 920
    },
    "Pkmn Ranger JENNA": {
      "level": "28",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1116
    },
    "Rival BRENDAN": {
      "level": "13",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1163
    },
    "Lady SARAH": {
      "level": "8",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1407
    },
    "Youngster JOHNSON": {
      "level": "8",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1506
    },
    "Rival MAY": {
      "level": "13",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1535
    }
  },
  "Seedot": {
    "Pkmn Breeder GABRIELLE": {
      "level": "31",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1806
    },
    "Twins GINA & MIA & Twins MIU & YUKI": {
      "level": "6",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 919
    },
    "Pkmn Ranger LORENZO": {
      "level": "28",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1105
    }
  },
  "Taillow": {
    "Pkmn Breeder GABRIELLE": {
      "level": "33",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1813
    },
    "Camper ETHAN": {
      "level": "26",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 397
    },
    "Winstrate VICTOR": {
      "level": "16",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 574
    },
    "Youngster ALLEN": {
      "level": "3",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 645
    },
    "Bird Keeper CHESTER": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 781
    },
    "Picnicker CAROL": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 891
    },
    "Pkmn Breeder ISAAC": {
      "level": "11",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1042
    },
    "Bird Keeper JOSUE": {
      "level": "25",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1472
    },
    "Camper BRANDEN": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1487
    }
  },
  "Cosmog": {
    "Team Aqua GRUNT": {
      "level": "17",
      "ivs": null,
      "item": "Silk Scarf",
      "ability": "Unaware",
      "nature": "Rash",
      "teraType": null,
      "status": null,
      "moves": [
        "Pound",
        "Splash",
        "Teleport"
      ],
      "index": 23
    }
  },
  "Pidove": {
    "Team Aqua GRUNT": {
      "level": "15",
      "ivs": null,
      "item": "Oran Berry",
      "ability": "Super Luck",
      "nature": "Jolly",
      "teraType": null,
      "status": null,
      "moves": [
        "Gust",
        "Growl"
      ],
      "index": 24
    }
  },
  "Voltorb": {
    "Team Aqua GRUNT": {
      "level": "16",
      "ivs": null,
      "item": "Shell Bell",
      "ability": "Static",
      "nature": "Timid",
      "teraType": null,
      "status": null,
      "moves": [
        "Charge",
        "Thundershock",
        "Thunder Wave"
      ],
      "index": 25
    },
    "Guitarist KIRK": {
      "level": "17",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Charge",
        "Shock Wave",
        "Screech"
      ],
      "index": 346
    },
    "Guitarist SHAWN": {
      "level": "17",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 350
    },
    "Leader WATTSON": {
      "level": "20",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rollout",
        "Spark",
        "Self Destruct",
        "Shock Wave"
      ],
      "index": 511
    },
    "Triathlete JACOB": {
      "level": "6",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 699
    },
    "Triathlete JASMINE": {
      "level": "6",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 711
    },
    "Guitarist JOSEPH": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1418
    },
    "Guitarist MARCOS": {
      "level": "15",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1420
    }
  },
  "Ariados": {
    "Team Aqua GRUNT": {
      "level": "16",
      "ivs": null,
      "item": "Lum Berry",
      "ability": "Swarm",
      "nature": "Jolly",
      "teraType": null,
      "status": null,
      "moves": [
        "Toxic",
        "Absorb",
        "String Shot",
        "Pin Missile"
      ],
      "index": 26
    }
  },
  "Graveler": {
    "Team Aqua GRUNT": {
      "level": "17",
      "ivs": null,
      "item": "Sticky Barb",
      "ability": "Sturdy",
      "nature": "Bold",
      "teraType": null,
      "status": null,
      "moves": [
        "Counter",
        "Mirror Coat",
        "Magnitude"
      ],
      "index": 27
    },
    "Cooltrainer OWEN": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 159
    },
    "Cooltrainer WARREN": {
      "level": "33",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 173
    },
    "Hiker ALAN": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1247
    },
    "Hiker TRENT": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1271
    },
    "Sr And Jr TYRA & IVY & Young Couple MEL & PAUL": {
      "level": "20",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Defense Curl",
        "Rollout",
        "Mud Sport",
        "Rock Throw"
      ],
      "index": 1374
    },
    "Hiker SAWYER": {
      "level": "30",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1798
    }
  },
  "Manectric": {
    "Cooltrainer MARCEL": {
      "level": "29",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 28
    },
    "Cooltrainer WILTON": {
      "level": "35",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 170
    },
    "Cooltrainer KEIRA": {
      "level": "45",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 182
    },
    "Gentleman WALTER": {
      "level": "41",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Quick Attack",
        "Spark",
        "Odor Sleuth",
        "Roar"
      ],
      "index": 481
    },
    "Gentleman MICAH": {
      "level": "44",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 472
    },
    "Leader WATTSON": {
      "level": "24",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Quick Attack",
        "Thunder Wave",
        "Shock Wave",
        "Howl"
      ],
      "index": 514
    },
    "Expert AURON": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 966
    },
    "Cooltrainer MARLEY": {
      "level": "34",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Bite",
        "Roar",
        "Thunder Wave",
        "Thunderbolt"
      ],
      "index": 970
    },
    "Cooltrainer ATHENA": {
      "level": "32",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Thunder Wave",
        "Quick Attack"
      ],
      "index": 1146
    },
    "Young Couple DEZ & LUKE & Young Couple LEA & JED": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1274
    },
    "Cooltrainer CAROLINA": {
      "level": "24",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1480
    },
    "Guitarist FABIAN": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1512
    },
    "Cooltrainer LEONEL": {
      "level": "30",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Quick Attack",
        "Thunder Wave"
      ],
      "index": 1516
    },
    "Leader WATTSON & Leader WATTSON": {
      "level": "55",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Bite",
        "Thunder Wave",
        "Thunder",
        "Protect"
      ],
      "index": 1597
    },
    "Guitarist FERNANDO": {
      "level": "41",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1789
    }
  },
  "Shiftry": {
    "Cooltrainer MARCEL": {
      "level": "29",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 29
    },
    "Cooltrainer BRAXTON": {
      "level": "28",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Giga Drain",
        "Feint Attack",
        "Double Team",
        "Swagger"
      ],
      "index": 138
    },
    "Cooltrainer VITO": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 157
    },
    "Elite Four SIDNEY": {
      "level": "48",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Torment",
        "Double Team",
        "Swagger",
        "Extrasensory"
      ],
      "index": 483
    },
    "Collector EDWIN": {
      "level": "35",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 990
    },
    "Cooltrainer RUBEN": {
      "level": "34",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1358
    },
    "Pkmn Breeder GABRIELLE": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1824
    }
  },
  "Pelipper": {
    "Bird Keeper ALBERTO": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 30
    },
    "Cooltrainer EDGAR": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 148
    },
    "Cooltrainer WENDY": {
      "level": "29",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Fly",
        "Water Gun",
        "Mist",
        "Protect"
      ],
      "index": 180
    },
    "Cooltrainer BROOKE": {
      "level": "34",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 206
    },
    "Swimmer M RICHARD": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 304
    },
    "Kindler BERNIE": {
      "level": "35",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 383
    },
    "Leader WINONA": {
      "level": "30",
      "ivs": {
        "hp": 25,
        "at": 25,
        "df": 25,
        "sa": 25,
        "sd": 25,
        "sp": 25
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Water Gun",
        "Supersonic",
        "Protect",
        "Aerial Ace"
      ],
      "index": 525
    },
    "Bird Keeper EDWARDO": {
      "level": "29",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 774
    },
    "Bird Keeper BENNY": {
      "level": "36",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 779
    },
    "Swimmer F KAYLEE": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 876
    },
    "Sailor LEONARD": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 944
    },
    "Sailor ERNEST": {
      "level": "45",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 957
    },
    "Rival BRENDAN": {
      "level": "32",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1329
    },
    "Rival MAY": {
      "level": "32",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1341
    },
    "Pkmn Breeder LYDIA": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1098
    },
    "Hiker MIKE": {
      "level": "10",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Gust",
        "Growl"
      ],
      "index": 1252
    },
    "Cooltrainer DARCY": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1463
    },
    "Leader WINONA & Leader WINONA": {
      "level": "55",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Surf",
        "Supersonic",
        "Protect",
        "Aerial Ace"
      ],
      "index": 1658
    },
    "Sailor CORY": {
      "level": "36",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1743
    },
    "Triathlete PABLO": {
      "level": "43",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1754
    }
  },
  "Xatu": {
    "Bird Keeper ALBERTO": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 31
    },
    "Psychic SAMANTHA": {
      "level": "36",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 453
    },
    "Psychic ALEXIS": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 459
    },
    "Leader TATE&LIZA & Leader JUAN": {
      "level": "41",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Psychic",
        "Sunny Day",
        "Confuse Ray",
        "Calm Mind"
      ],
      "index": 529
    },
    "Bird Keeper PRESLEY": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 772
    },
    "Bird Keeper BENNY": {
      "level": "36",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 780
    },
    "Bird Keeper ROBERT": {
      "level": "41",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 790
    },
    "Camper FLINT": {
      "level": "29",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1299
    },
    "Leader TATE&LIZA & Leader TATE&LIZA": {
      "level": "64",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Chesto Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Psychic",
        "Rest",
        "Confuse Ray",
        "Calm Mind"
      ],
      "index": 1682
    }
  },
  "Zangoose": {
    "Collector ED": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 32
    },
    "Cooltrainer JODY": {
      "level": "26",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Swords Dance",
        "Slash"
      ],
      "index": 177
    },
    "Gentleman THOMAS": {
      "level": "45",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 473
    },
    "Collector HECTOR": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 978
    }
  },
  "Seviper": {
    "Collector ED": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 33
    },
    "Beauty JESSICA": {
      "level": "44",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Poison Tail",
        "Screech",
        "Glare",
        "Crunch"
      ],
      "index": 261
    },
    "Collector HECTOR": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 979
    }
  },
  "Gyarados": {
    "Swimmer M DECLAN": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 35
    },
    "Swimmer M BARRY": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 299
    },
    "Swimmer M RODNEY": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 303
    },
    "Swimmer M JACK": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 312
    },
    "Champion WALLACE": {
      "level": "56",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Dragon Dance",
        "Earthquake",
        "Hyper Beam",
        "Surf"
      ],
      "index": 652
    },
    "Fisherman ELLIOT": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 690
    },
    "Fisherman RONALD": {
      "level": "35",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 697
    },
    "Fisherman ROGER": {
      "level": "35",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1355
    }
  },
  "Numel": {
    "Team Magma GRUNT": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1457
    },
    "Cooltrainer BROOKE": {
      "level": "32",
      "ivs": {
        "hp": 15,
        "at": 15,
        "df": 15,
        "sa": 15,
        "sd": 15,
        "sp": 15
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 204
    },
    "Beauty SHIRLEY": {
      "level": "21",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 244
    },
    "Kindler COLE": {
      "level": "23",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 368
    },
    "Kindler AXLE": {
      "level": "23",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 371
    },
    "Leader FLANNERY": {
      "level": "24",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Overheat",
        "Take Down",
        "Magnitude",
        "Sunny Day"
      ],
      "index": 515
    },
    "School Kid PAUL": {
      "level": "15",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 539
    },
    "Parasol Lady MADELINE": {
      "level": "34",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Flamethrower",
        "Take Down",
        "Magnitude",
        "Sunny Day"
      ],
      "index": 842
    },
    "Hiker ELI": {
      "level": "23",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 960
    },
    "Magma Admin TABITHA": {
      "level": "26",
      "ivs": {
        "hp": 9,
        "at": 9,
        "df": 9,
        "sa": 9,
        "sd": 9,
        "sp": 9
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1459
    },
    "Winstrate VIVI": {
      "level": "15",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1195
    },
    "Hiker BRICE": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1236
    },
    "Hiker LUCAS": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1244
    },
    "Twins TORI & TIA & Sr And Jr KIM & IRIS": {
      "level": "35",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Flamethrower",
        "Take Down",
        "Rest",
        "Earthquake"
      ],
      "index": 1372
    },
    "Kindler HAYDEN": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1425
    },
    "Kindler BRYANT": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1489
    },
    "Kindler DAYTON": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1514
    },
    "Pkmn Breeder MYLES": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1526
    },
    "Hiker SAWYER": {
      "level": "30",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1797
    }
  },
  "Makuhita": {
    "Expert FREDRICK": {
      "level": "30",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 55
    },
    "Cooltrainer WILTON": {
      "level": "32",
      "ivs": {
        "hp": 15,
        "at": 15,
        "df": 15,
        "sa": 15,
        "sd": 15,
        "sp": 15
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 169
    },
    "Black Belt YUJI": {
      "level": "26",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 341
    },
    "Leader BRAWLY": {
      "level": "19",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Arm Thrust",
        "Vital Throw",
        "Reversal",
        "Bulk Up"
      ],
      "index": 510
    },
    "Sr And Jr KATE & JOY & Sr And Jr ANNA & MEG": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Tackle",
        "Focus Energy",
        "Arm Thrust"
      ],
      "index": 565
    },
    "Sr And Jr ANNA & MEG & Sr And Jr ANNA & MEG": {
      "level": "36",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Tackle",
        "Focus Energy",
        "Arm Thrust"
      ],
      "index": 571
    },
    "Expert SHELBY": {
      "level": "30",
      "ivs": {
        "hp": 25,
        "at": 25,
        "df": 25,
        "sa": 25,
        "sd": 25,
        "sp": 25
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 611
    },
    "Battle Girl CYNDY": {
      "level": "29",
      "ivs": {
        "hp": 14,
        "at": 14,
        "df": 14,
        "sa": 14,
        "sd": 14,
        "sp": 14
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 830
    },
    "Pkmn Breeder ISAAC": {
      "level": "22",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1052
    },
    "Black Belt CRISTIAN": {
      "level": "13",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1143
    },
    "Black Belt RHETT": {
      "level": "15",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1421
    },
    "Battle Girl HELENE": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1500
    },
    "Battle Girl CALLIE": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1518
    },
    "Pkmn Breeder MYLES": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1521
    },
    "Black Belt KOJI": {
      "level": "39",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1759
    }
  },
  "Machoke": {
    "Expert FREDRICK": {
      "level": "30",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 56
    },
    "Black Belt HITOSHI": {
      "level": "32",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 326
    },
    "Black Belt KOICHI": {
      "level": "28",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 329
    },
    "Black Belt NOB": {
      "level": "33",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 339
    },
    "Black Belt YUJI": {
      "level": "26",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 342
    },
    "Sailor ERNEST": {
      "level": "45",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 958
    },
    "Sailor PHILLIP": {
      "level": "44",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 942
    },
    "Sailor LEONARD": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 945
    },
    "Sailor DUNCAN": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 947
    },
    "Sailor KELVIN": {
      "level": "33",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 968
    },
    "Black Belt KOJI": {
      "level": "41",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1764
    },
    "Sailor CORY": {
      "level": "36",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1744
    },
    "Hiker SAWYER": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1799
    }
  },
  "Mightyena": {
    "Aqua Admin MATT": {
      "level": "34",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 57
    },
    "Aqua Admin SHELLY": {
      "level": "37",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 63
    },
    "Aqua Leader ARCHIE": {
      "level": "41",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 64
    },
    "Team Magma GRUNT": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1456
    },
    "Elite Four SIDNEY": {
      "level": "46",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Roar",
        "Double Edge",
        "Sand Attack",
        "Crunch"
      ],
      "index": 482
    },
    "Youngster CALVIN": {
      "level": "36",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 641
    },
    "Magma Admin TABITHA": {
      "level": "28",
      "ivs": {
        "hp": 9,
        "at": 9,
        "df": 9,
        "sa": 9,
        "sd": 9,
        "sp": 9
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1460
    },
    "Pkmn Breeder ISAAC": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1068
    },
    "Team Aqua GRUNT": {
      "level": "35",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1130
    },
    "Magma Leader MAXIE": {
      "level": "42",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1465
    },
    "Pkmn Breeder GABRIELLE": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1821
    }
  },
  "Golbat": {
    "Aqua Admin MATT": {
      "level": "34",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 58
    },
    "Magma Admin TABITHA": {
      "level": "40",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 982
    },
    "Team Aqua GRUNT": {
      "level": "35",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1131
    }
  },
  "Hariyama": {
    "Black Belt ZANDER": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 59
    },
    "Cooltrainer WILTON": {
      "level": "35",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 172
    },
    "Black Belt KIYO": {
      "level": "34",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 327
    },
    "Black Belt ATSUSHI": {
      "level": "32",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 344
    },
    "Sr And Jr ANNA & MEG & Sr And Jr ANNA & MEG": {
      "level": "38",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Tackle",
        "Focus Energy",
        "Arm Thrust"
      ],
      "index": 573
    },
    "Expert TIMOTHY": {
      "level": "42",
      "ivs": {
        "hp": 29,
        "at": 29,
        "df": 29,
        "sa": 29,
        "sd": 29,
        "sp": 29
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Arm Thrust",
        "Belly Drum",
        "Sand Attack",
        "Dig"
      ],
      "index": 606
    },
    "Expert SHELBY": {
      "level": "39",
      "ivs": {
        "hp": 29,
        "at": 29,
        "df": 29,
        "sa": 29,
        "sd": 29,
        "sp": 29
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 617
    },
    "Battle Girl CYNDY": {
      "level": "35",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 834
    },
    "Battle Girl REYNA": {
      "level": "33",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 972
    },
    "Expert CONOR": {
      "level": "33",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 975
    },
    "Pkmn Breeder ISAAC": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1070
    },
    "Old Couple JOHN & JAY & Old Couple JOHN & JAY": {
      "level": "49",
      "ivs": {
        "hp": 27,
        "at": 27,
        "df": 27,
        "sa": 27,
        "sd": 27,
        "sp": 27
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Focus Punch",
        "Rock Tomb",
        "Rest",
        "Belly Drum"
      ],
      "index": 1384
    },
    "Old Couple JOHN & JAY & Sis And Bro RELI & IAN": {
      "level": "52",
      "ivs": {
        "hp": 29,
        "at": 29,
        "df": 29,
        "sa": 29,
        "sd": 29,
        "sp": 29
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Focus Punch",
        "Rock Tomb",
        "Rest",
        "Belly Drum"
      ],
      "index": 1386
    },
    "Leader BRAWLY & Leader BRAWLY": {
      "level": "52",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Fake Out",
        "Focus Punch",
        "Belly Drum",
        "Earthquake"
      ],
      "index": 1577
    },
    "Black Belt KOJI": {
      "level": "43",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1765
    }
  },
  "Sharpedo": {
    "Aqua Admin SHELLY": {
      "level": "37",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 62
    },
    "Aqua Leader ARCHIE": {
      "level": "43",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 66
    },
    "Cooltrainer VINCENT": {
      "level": "44",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 141
    },
    "Beauty TIFFANY": {
      "level": "39",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 253
    },
    "Swimmer M GILBERT": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 309
    },
    "Swimmer M TONY": {
      "level": "39",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 323
    },
    "Fisherman ELLIOT": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 689
    },
    "Swimmer M CLARENCE": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1150
    },
    "Fisherman JONAH": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1350
    },
    "Swimmer M REED": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1367
    },
    "Sis And Bro LILA & ROY & Sis And Bro LILA & ROY": {
      "level": "46",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1396
    },
    "Sis And Bro LILA & ROY & Sis And Bro LISA & RAY": {
      "level": "49",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1398
    }
  },
  "Crobat": {
    "Aqua Leader ARCHIE": {
      "level": "41",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 65
    },
    "Magma Leader MAXIE": {
      "level": "43",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1466
    }
  },
  "Spoink": {
    "Hex Maniac LEAH": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 67
    },
    "Hex Maniac VALERIE": {
      "level": "40",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 221
    },
    "Gentleman NATE": {
      "level": "36",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1152
    },
    "Psychic MARLENE": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1502
    }
  },
  "Shroomish": {
    "Aroma Lady DAISY": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 68
    },
    "Aroma Lady ROSE": {
      "level": "31",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 82
    },
    "Beauty SHEILA": {
      "level": "21",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 243
    },
    "Picnicker AUTUMN": {
      "level": "21",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 394
    },
    "School Kid KAREN": {
      "level": "29",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 556
    },
    "School Kid GEORGIA": {
      "level": "16",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 552
    },
    "Picnicker DIANA": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 903
    },
    "Picnicker IRENE": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 901
    },
    "Twins AMY & LIV & Twins GINA & MIA": {
      "level": "10",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Absorb",
        "Leech Seed"
      ],
      "index": 926
    },
    "Pkmn Breeder LYDIA": {
      "level": "22",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1081
    },
    "Lass TIANA": {
      "level": "4",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1189
    },
    "Winstrate VIVI": {
      "level": "15",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1194
    },
    "Lass HALEY": {
      "level": "26",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1197
    },
    "Lass ROBIN": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1207
    },
    "Picnicker BIANCA": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1424
    },
    "Aroma Lady SHAYLA": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1491
    },
    "Youngster JOHNSON": {
      "level": "8",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1505
    },
    "Pkmn Breeder PAT": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1528
    }
  },
  "Roselia": {
    "Aroma Lady DAISY": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 69
    },
    "Aroma Lady ROSE": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 87
    },
    "Aroma Lady VIOLET": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 75
    },
    "Cooltrainer WENDY": {
      "level": "29",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Mega Drain",
        "Magical Leaf",
        "Grass Whistle",
        "Leech Seed"
      ],
      "index": 179
    },
    "Cooltrainer BROOKE": {
      "level": "34",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 208
    },
    "Cooltrainer HOPE": {
      "level": "45",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 187
    },
    "Lady NAOMI": {
      "level": "45",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 237
    },
    "Winstrate VICTORIA": {
      "level": "17",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 587
    },
    "Parasol Lady CLARISSA": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 836
    },
    "Parasol Lady MADELINE": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Leech Seed",
        "Giga Drain",
        "Solar Beam",
        "Sunny Day"
      ],
      "index": 843
    },
    "Rival WALLY": {
      "level": "56",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Magical Leaf",
        "Leech Seed",
        "Giga Drain",
        "Toxic"
      ],
      "index": 1321
    },
    "Pkmn Breeder LYDIA": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1101
    },
    "Pkmn Ranger CATHERINE": {
      "level": "39",
      "ivs": {
        "hp": 10,
        "at": 10,
        "df": 10,
        "sa": 10,
        "sd": 10,
        "sp": 10
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1128
    },
    "Pkmn Ranger SOPHIA": {
      "level": "38",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1120
    },
    "Sr And Jr TYRA & IVY & Young Couple MEL & PAUL": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Growth",
        "Stun Spore",
        "Mega Drain",
        "Leech Seed"
      ],
      "index": 1373
    },
    "Aroma Lady CELINA": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1423
    },
    "Aroma Lady SHAYLA": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1492
    },
    "Expert MAKAYLA": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1510
    }
  },
  "Medicham": {
    "Cooltrainer FELIX": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Psychic"
      ],
      "index": 73
    },
    "Cooltrainer VINCENT": {
      "level": "44",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 140
    },
    "Cooltrainer MICHELLE": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 190
    },
    "School Kid JERRY": {
      "level": "34",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 550
    },
    "Expert SHELBY": {
      "level": "39",
      "ivs": {
        "hp": 29,
        "at": 29,
        "df": 29,
        "sa": 29,
        "sd": 29,
        "sp": 29
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 616
    },
    "Battle Girl CYNDY": {
      "level": "35",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 833
    },
    "Old Couple JOHN & JAY & Old Couple JOHN & JAY": {
      "level": "49",
      "ivs": {
        "hp": 27,
        "at": 27,
        "df": 27,
        "sa": 27,
        "sd": 27,
        "sp": 27
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Psychic",
        "Fire Punch",
        "Psych Up",
        "Protect"
      ],
      "index": 1383
    },
    "Old Couple JOHN & JAY & Sis And Bro RELI & IAN": {
      "level": "52",
      "ivs": {
        "hp": 29,
        "at": 29,
        "df": 29,
        "sa": 29,
        "sd": 29,
        "sp": 29
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Psychic",
        "Fire Punch",
        "Psych Up",
        "Protect"
      ],
      "index": 1385
    },
    "Expert MAKAYLA": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1511
    },
    "Leader BRAWLY & Leader BRAWLY": {
      "level": "48",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Focus Punch",
        "Light Screen",
        "Reflect",
        "Psychic"
      ],
      "index": 1575
    }
  },
  "Claydol": {
    "Cooltrainer FELIX": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Skill Swap",
        "Earthquake"
      ],
      "index": 74
    },
    "Cooltrainer SHANNON": {
      "level": "45",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 188
    },
    "Leader TATE&LIZA & Leader JUAN": {
      "level": "41",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Earthquake",
        "Ancient Power",
        "Psychic",
        "Light Screen"
      ],
      "index": 528
    },
    "Cooltrainer DIANNE": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Skill Swap",
        "Earthquake"
      ],
      "index": 797
    },
    "Leader TATE&LIZA & Leader TATE&LIZA": {
      "level": "64",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Earthquake",
        "Explosion",
        "Psychic",
        "Light Screen"
      ],
      "index": 1680
    },
    "Rival STEVEN": {
      "level": "75",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Reflect",
        "Light Screen",
        "Ancient Power",
        "Earthquake"
      ],
      "index": 1711
    }
  },
  "Gloom": {
    "Aroma Lady VIOLET": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 76
    },
    "Aroma Lady ROSE": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 86
    },
    "Picnicker DIANA": {
      "level": "31",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 910
    },
    "Pkmn Ranger CATHERINE": {
      "level": "36",
      "ivs": {
        "hp": 9,
        "at": 9,
        "df": 9,
        "sa": 9,
        "sd": 9,
        "sp": 9
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1125
    },
    "Cooltrainer ALEXA": {
      "level": "34",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1356
    }
  },
  "Breloom": {
    "Aroma Lady ROSE": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 85
    },
    "School Kid KAREN": {
      "level": "35",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 560
    },
    "Battle Girl PAULA": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 826
    },
    "Picnicker DIANA": {
      "level": "40",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 912
    },
    "Pkmn Breeder LYDIA": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1099
    },
    "Pkmn Ranger JACKSON": {
      "level": "39",
      "ivs": {
        "hp": 10,
        "at": 10,
        "df": 10,
        "sa": 10,
        "sd": 10,
        "sp": 10
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1113
    },
    "Expert PAXTON": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1168
    },
    "Lass HALEY": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1204
    }
  },
  "Sandslash": {
    "Ruin Maniac DUSTY": {
      "level": "36",
      "ivs": {
        "hp": 10,
        "at": 10,
        "df": 10,
        "sa": 10,
        "sd": 10,
        "sp": 10
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Dig",
        "Slash",
        "Sand Attack",
        "Poison Sting"
      ],
      "index": 97
    },
    "Ruin Maniac CHIP": {
      "level": "27",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Dig",
        "Slash",
        "Sand Attack",
        "Poison Sting"
      ],
      "index": 91
    },
    "Ruin Maniac FOSTER": {
      "level": "25",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Dig",
        "Slash",
        "Sand Attack",
        "Poison Sting"
      ],
      "index": 93
    },
    "Cooltrainer JULIE": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 194
    },
    "Camper ETHAN": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 404
    },
    "Ruin Maniac GARRISON": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1079
    },
    "Ruin Maniac BRYAN": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1486
    },
    "Ruin Maniac ANDRES": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1733
    }
  },
  "Baltoy": {
    "Ruin Maniac CHIP": {
      "level": "27",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Psybeam",
        "Self Destruct",
        "Sandstorm",
        "Ancient Power"
      ],
      "index": 89
    },
    "Camper BEAU": {
      "level": "21",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rapid Spin",
        "Mud Slap",
        "Psybeam",
        "Rock Tomb"
      ],
      "index": 387
    },
    "Picnicker HEIDI": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rapid Spin",
        "Mud Slap",
        "Psybeam",
        "Rock Tomb"
      ],
      "index": 888
    },
    "Team Magma GRUNT": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1458
    },
    "Hiker ERIC": {
      "level": "20",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1250
    },
    "Camper LAWRENCE": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1430
    }
  },
  "Sandshrew": {
    "Ruin Maniac CHIP": {
      "level": "27",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Dig",
        "Slash",
        "Sand Attack",
        "Poison Sting"
      ],
      "index": 90
    },
    "Ruin Maniac FOSTER": {
      "level": "25",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Dig",
        "Slash",
        "Sand Attack",
        "Poison Sting"
      ],
      "index": 92
    },
    "Camper DREW": {
      "level": "23",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Dig",
        "Sand Attack",
        "Poison Sting",
        "Slash"
      ],
      "index": 384
    },
    "Camper BEAU": {
      "level": "21",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Poison Sting",
        "Sand Attack",
        "Scratch",
        "Dig"
      ],
      "index": 386
    },
    "Camper SHANE": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 389
    },
    "Camper TRAVIS": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 395
    },
    "Camper ETHAN": {
      "level": "31",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 400
    },
    "Picnicker HEIDI": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Dig",
        "Sand Attack",
        "Poison Sting",
        "Slash"
      ],
      "index": 887
    },
    "Picnicker BECKY": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sand Attack",
        "Poison Sting",
        "Slash",
        "Dig"
      ],
      "index": 889
    },
    "Camper TYRON": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1422
    },
    "Camper LAWRENCE": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1431
    },
    "Ruin Maniac ANDRES": {
      "level": "35",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1730
    },
    "Ruin Maniac BRYAN": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1485
    },
    "Pkmn Breeder PAT": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1531
    }
  },
  "Magnemite": {
    "Interviewer GABBY & TY & Interviewer GABBY & TY": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 100
    },
    "Guitarist SHAWN": {
      "level": "17",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 351
    },
    "Guitarist DALTON": {
      "level": "28",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 361
    },
    "Triathlete JACOB": {
      "level": "14",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 700
    },
    "Triathlete ANTHONY": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 702
    },
    "Triathlete BENJAMIN": {
      "level": "33",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 705
    },
    "Triathlete ABIGAIL": {
      "level": "31",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 713
    },
    "Triathlete JASMINE": {
      "level": "14",
      "ivs": {
        "hp": 9,
        "at": 9,
        "df": 9,
        "sa": 9,
        "sd": 9,
        "sp": 9
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 710
    },
    "Triathlete JULIO": {
      "level": "21",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1129
    },
    "Triathlete ALYSSA": {
      "level": "15",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1419
    }
  },
  "Whismur": {
    "Interviewer GABBY & TY & Interviewer GABBY & TY": {
      "level": "17",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 99
    },
    "Guitarist DALTON": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 357
    },
    "School Kid KAREN": {
      "level": "26",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 555
    },
    "Pkmn Breeder ISAAC": {
      "level": "11",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1038
    }
  },
  "Loudred": {
    "Interviewer GABBY & TY & Interviewer GABBY & TY": {
      "level": "36",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 107
    },
    "Guitarist FERNANDO": {
      "level": "39",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1787
    },
    "Guitarist DALTON": {
      "level": "31",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 363
    },
    "School Kid KAREN": {
      "level": "32",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 559
    },
    "Pkmn Breeder ISAAC": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1065
    },
    "Cooltrainer JONATHAN": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1177
    },
    "Cooltrainer CRISTIN": {
      "level": "39",
      "ivs": {
        "hp": 15,
        "at": 15,
        "df": 15,
        "sa": 15,
        "sd": 15,
        "sp": 15
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1774
    }
  },
  "Magneton": {
    "Interviewer GABBY & TY & Interviewer GABBY & TY": {
      "level": "39",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sonic Boom",
        "Thunder Wave",
        "Metal Sound",
        "Thunderbolt"
      ],
      "index": 108
    },
    "Cooltrainer BRAXTON": {
      "level": "28",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunderbolt",
        "Supersonic",
        "Thunder Wave",
        "Sonic Boom"
      ],
      "index": 137
    },
    "Cooltrainer ALBERT": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 149
    },
    "Guitarist DALTON": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 367
    },
    "Leader WATTSON": {
      "level": "22",
      "ivs": {
        "hp": 26,
        "at": 26,
        "df": 26,
        "sa": 26,
        "sd": 26,
        "sp": 26
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Supersonic",
        "Shock Wave",
        "Thunder Wave",
        "Sonic Boom"
      ],
      "index": 513
    },
    "Triathlete BENJAMIN": {
      "level": "39",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 707
    },
    "Triathlete ABIGAIL": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 715
    },
    "Rival WALLY": {
      "level": "53",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Supersonic",
        "Thunderbolt",
        "Tri Attack",
        "Screech"
      ],
      "index": 1322
    },
    "Leader WATTSON & Leader WATTSON": {
      "level": "53",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Supersonic",
        "Protect",
        "Thunder",
        "Rain Dance"
      ],
      "index": 1596
    }
  },
  "Exploud": {
    "Interviewer GABBY & TY & Interviewer GABBY & TY": {
      "level": "39",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Astonish",
        "Stomp",
        "Supersonic",
        "Hyper Voice"
      ],
      "index": 109
    },
    "Guitarist DALTON": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 366
    },
    "School Kid KAREN": {
      "level": "35",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 561
    },
    "Cooltrainer CRISTIN": {
      "level": "41",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1777
    },
    "Guitarist FERNANDO": {
      "level": "41",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1790
    }
  },
  "Azurill": {
    "Tuber F LOLA": {
      "level": "12",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 111
    },
    "Tuber M SIMON": {
      "level": "12",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 123
    },
    "Pokefan BETHANY": {
      "level": "35",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 589
    }
  },
  "Marill": {
    "Tuber F AUSTINA": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 112
    },
    "Tuber F GWEN": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 113
    },
    "Tuber F LOLA": {
      "level": "32",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 119
    },
    "Tuber M SIMON": {
      "level": "12",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 124
    },
    "Tuber M CHARLIE": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 125
    },
    "Beauty MELISSA": {
      "level": "21",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 242
    },
    "Pokefan BETHANY": {
      "level": "37",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 590
    },
    "Tuber F JANI": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 799
    },
    "Swimmer F IMANI": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 847
    },
    "Swimmer F TARA": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 853
    },
    "Swimmer F GRACE": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 859
    },
    "Swimmer F NIKKI": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 862
    },
    "Picnicker BECKY": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rollout",
        "Bubble Beam",
        "Tail Whip",
        "Defense Curl"
      ],
      "index": 890
    },
    "Picnicker NANCY": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 893
    },
    "Picnicker IRENE": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 902
    },
    "Pkmn Breeder LYDIA": {
      "level": "28",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1094
    },
    "Lass JANICE": {
      "level": "9",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1192
    },
    "Winstrate VIVI": {
      "level": "15",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1193
    },
    "Lass ROBIN": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1208
    },
    "Tuber F HAILEY": {
      "level": "13",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1412
    },
    "Picnicker SOPHIE": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1426
    },
    "Picnicker ANGELINA": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1435
    },
    "Swimmer F ISABELLE": {
      "level": "15",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1469
    },
    "Picnicker CELIA": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1483
    },
    "Pkmn Breeder PAT": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1530
    }
  },
  "Azumarill": {
    "Tuber F LOLA": {
      "level": "35",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 121
    },
    "Beauty BRIDGET": {
      "level": "40",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 248
    },
    "Rich Boy GARRET": {
      "level": "45",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 265
    },
    "Pokefan BETHANY": {
      "level": "39",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 591
    },
    "Swimmer F DANA": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 869
    },
    "Pkmn Breeder LYDIA": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1100
    },
    "Cooltrainer ALEXA": {
      "level": "34",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1357
    },
    "Old Couple JOHN & JAY & Sis And Bro RELI & IAN": {
      "level": "35",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1387
    }
  },
  "Linoone": {
    "Tuber M RICKY": {
      "level": "36",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sand Attack",
        "Pin Missile",
        "Tail Whip",
        "Surf"
      ],
      "index": 129
    },
    "Lady CINDY": {
      "level": "36",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Fury Swipes",
        "Mud Sport",
        "Odor Sleuth",
        "Sand Attack"
      ],
      "index": 241
    },
    "Rich Boy WINSTON": {
      "level": "36",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Fury Swipes",
        "Mud Sport",
        "Odor Sleuth",
        "Sand Attack"
      ],
      "index": 269
    },
    "Camper ETHAN": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 405
    },
    "Gentleman WALTER": {
      "level": "41",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Headbutt",
        "Sand Attack",
        "Odor Sleuth",
        "Fury Swipes"
      ],
      "index": 479
    },
    "Leader NORMAN": {
      "level": "29",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Slash",
        "Belly Drum",
        "Facade",
        "Headbutt"
      ],
      "index": 521
    },
    "Sr And Jr ANNA & MEG & Sr And Jr ANNA & MEG": {
      "level": "36",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Growl",
        "Tail Whip",
        "Headbutt",
        "Odor Sleuth"
      ],
      "index": 572
    },
    "Youngster CALVIN": {
      "level": "32",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 640
    },
    "Pkmn Breeder ISAAC": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1066
    },
    "Cooltrainer ATHENA": {
      "level": "32",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Surf",
        "Thief"
      ],
      "index": 1147
    },
    "Pkmn Breeder GABRIELLE": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1822
    }
  },
  "Swellow": {
    "Cooltrainer RANDALL": {
      "level": "26",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Quick Attack",
        "Agility",
        "Wing Attack"
      ],
      "index": 130
    },
    "Cooltrainer BRAXTON": {
      "level": "28",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Focus Energy",
        "Quick Attack",
        "Wing Attack",
        "Endeavor"
      ],
      "index": 134
    },
    "Cooltrainer SAMUEL": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 151
    },
    "Camper ETHAN": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 403
    },
    "Youngster CALVIN": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 639
    },
    "Bird Keeper PHIL": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 766
    },
    "Bird Keeper BENNY": {
      "level": "36",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 778
    },
    "Bird Keeper CHESTER": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 782
    },
    "Bird Keeper ALEX": {
      "level": "33",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 792
    },
    "Pkmn Breeder ISAAC": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1069
    },
    "Expert PAXTON": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1167
    },
    "Lass HALEY": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1202
    },
    "Camper FLINT": {
      "level": "29",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1298
    },
    "Bird Keeper AIDAN": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1364
    },
    "Bird Keeper COBY": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1429
    },
    "Cooltrainer CAROLINA": {
      "level": "24",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1479
    },
    "Pkmn Breeder GABRIELLE": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1825
    }
  },
  "Spinda": {
    "Cooltrainer PARKER": {
      "level": "26",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Teeter Dance",
        "Dizzy Punch",
        "Focus Punch"
      ],
      "index": 131
    },
    "Leader NORMAN": {
      "level": "27",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Teeter Dance",
        "Psybeam",
        "Facade",
        "Encore"
      ],
      "index": 519
    },
    "Sr And Jr KATE & JOY & Sr And Jr ANNA & MEG": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hypnosis",
        "Psybeam",
        "Dizzy Punch",
        "Teeter Dance"
      ],
      "index": 562
    },
    "Youngster BILLY": {
      "level": "16",
      "ivs": null,
      "item": "Sitrus Berry",
      "ability": "Own Tempo",
      "nature": "Serious",
      "teraType": null,
      "status": null,
      "moves": [
        "Substitute",
        "Metronome"
      ],
      "index": 620
    },
    "Twins TORI & TIA & Sr And Jr KIM & IRIS": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1370
    },
    "Leader NORMAN & Leader NORMAN": {
      "level": "58",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Teeter Dance",
        "Skill Swap",
        "Facade",
        "Hypnosis"
      ],
      "index": 1637
    },
    "Cooltrainer CRISTIN": {
      "level": "41",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1776
    }
  },
  "Slakoth": {
    "Cooltrainer GEORGE": {
      "level": "26",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Slack Off",
        "Counter",
        "Shadow Ball"
      ],
      "index": 132
    },
    "Lady CINDY": {
      "level": "16",
      "ivs": null,
      "item": "King's Rock",
      "ability": "Truant",
      "nature": "Adamant",
      "teraType": null,
      "status": null,
      "moves": [
        "Crush Claw",
        "Yawn",
        "Slack Off"
      ],
      "index": 229
    }
  },
  "Vigoroth": {
    "Cooltrainer BERKE": {
      "level": "26",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Focus Energy",
        "Slash"
      ],
      "index": 133
    },
    "Leader ROXANNE": {
      "level": "17",
      "ivs": null,
      "item": "Scope Lens",
      "ability": "Vital Spirit",
      "nature": "Serious",
      "teraType": null,
      "status": null,
      "moves": [
        "Retaliate",
        "Slash",
        "Focus Energy"
      ],
      "index": 505
    },
    "Leader NORMAN": {
      "level": "27",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Slash",
        "Facade",
        "Encore",
        "Feint Attack"
      ],
      "index": 520
    },
    "Cooltrainer CRISTIN": {
      "level": "39",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1775
    }
  },
  "Trapinch": {
    "Cooltrainer BRAXTON": {
      "level": "28",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Bite",
        "Dig",
        "Feint Attack",
        "Sand Tomb"
      ],
      "index": 135
    },
    "Youngster JAYLEN": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 631
    }
  },
  "Wailmer": {
    "Cooltrainer BRAXTON": {
      "level": "28",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rollout",
        "Whirlpool",
        "Astonish",
        "Water Pulse"
      ],
      "index": 136
    },
    "Cooltrainer WILTON": {
      "level": "35",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 171
    },
    "Beauty THALIA": {
      "level": "38",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1832
    },
    "Swimmer M SANTIAGO": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 308
    },
    "Swimmer M CHAD": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 317
    },
    "Fisherman DALE": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 670
    },
    "Fisherman CARTER": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 675
    },
    "Parasol Lady CLARISSA": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 837
    },
    "Swimmer F BEVERLY": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 846
    },
    "Swimmer F KYLA": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 848
    },
    "Swimmer F JENNY": {
      "level": "45",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 885
    },
    "Sailor HUDSON": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 973
    },
    "Team Magma GRUNT": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1132
    },
    "Team Aqua GRUNT": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1134
    },
    "Lass CRISSY": {
      "level": "39",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1211
    },
    "Hiker LUCAS": {
      "level": "9",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Splash",
        "Water Gun"
      ],
      "index": 1251
    },
    "Fisherman JONAH": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1348
    },
    "Fisherman WAYNE": {
      "level": "36",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1363
    }
  },
  "Sableye": {
    "Cooltrainer VINCENT": {
      "level": "44",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 139
    },
    "Cooltrainer JENNIFER": {
      "level": "30",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 186
    },
    "Cooltrainer CAROLINE": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 193
    },
    "Hex Maniac VALERIE": {
      "level": "42",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 224
    },
    "Elite Four PHOEBE": {
      "level": "50",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Shadow Ball",
        "Double Team",
        "Night Shade",
        "Feint Attack"
      ],
      "index": 489
    },
    "Cooltrainer HALLE": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1077
    }
  },
  "Mawile": {
    "Cooltrainer LEROY": {
      "level": "46",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 142
    },
    "Cooltrainer SAMUEL": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 152
    },
    "Cooltrainer WENDY": {
      "level": "29",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Baton Pass",
        "Feint Attack",
        "Fake Tears",
        "Bite"
      ],
      "index": 178
    }
  },
  "Starmie": {
    "Cooltrainer LEROY": {
      "level": "46",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 143
    },
    "Swimmer M TONY": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 322
    },
    "Triathlete ISAIAH": {
      "level": "48",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 738
    },
    "Triathlete KATELYN": {
      "level": "48",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 749
    },
    "Swimmer F JENNY": {
      "level": "45",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 886
    },
    "Triathlete PABLO": {
      "level": "43",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1756
    }
  },
  "Electrike": {
    "Cooltrainer WILTON": {
      "level": "26",
      "ivs": {
        "hp": 13,
        "at": 13,
        "df": 13,
        "sa": 13,
        "sd": 13,
        "sp": 13
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 161
    },
    "Guitarist KIRK": {
      "level": "17",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Quick Attack",
        "Thunder Wave",
        "Spark",
        "Leer"
      ],
      "index": 345
    },
    "Guitarist FERNANDO": {
      "level": "37",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1782
    },
    "Leader WATTSON": {
      "level": "20",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Shock Wave",
        "Leer",
        "Quick Attack",
        "Howl"
      ],
      "index": 512
    },
    "Youngster TIMMY": {
      "level": "13",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 647
    },
    "Youngster DEMETRIUS": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 729
    },
    "Guitarist JOSEPH": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1417
    },
    "Youngster DEANDRE": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1440
    },
    "Pkmn Breeder MYLES": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1525
    },
    "Pkmn Breeder PAT": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1529
    }
  },
  "Cacturne": {
    "Cooltrainer EDGAR": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 147
    },
    "Elite Four SIDNEY": {
      "level": "46",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Leech Seed",
        "Feint Attack",
        "Needle Arm",
        "Cotton Spore"
      ],
      "index": 484
    },
    "Pkmn Ranger SEBASTIAN": {
      "level": "39",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1108
    }
  },
  "Muk": {
    "Cooltrainer ALBERT": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 150
    }
  },
  "Kadabra": {
    "Cooltrainer SAMUEL": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 153
    },
    "Cooltrainer VITO": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 155
    },
    "Psychic JOSHUA": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 440
    },
    "Psychic CAMERON": {
      "level": "41",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 447
    },
    "Psychic MAURA": {
      "level": "36",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 454
    },
    "Psychic KAYLA": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 457
    },
    "Psychic JACKI": {
      "level": "40",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 466
    },
    "Hex Maniac KATHLEEN": {
      "level": "36",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1153
    },
    "Psychic ALIX": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1497
    },
    "Psychic ALVARO": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1839
    }
  },
  "Dodrio": {
    "Cooltrainer VITO": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 154
    },
    "Triathlete DYLAN": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 720
    },
    "Triathlete MARIA": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 725
    },
    "Triathlete KYRA": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1494
    }
  },
  "Electrode": {
    "Cooltrainer VITO": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 156
    },
    "Leader WATTSON & Leader WATTSON": {
      "level": "53",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rollout",
        "Thunder",
        "Explosion",
        "Rain Dance"
      ],
      "index": 1595
    }
  },
  "Kecleon": {
    "Cooltrainer OWEN": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 158
    },
    "Beauty JESSICA": {
      "level": "44",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Bind",
        "Lick",
        "Fury Swipes",
        "Feint Attack"
      ],
      "index": 260
    },
    "Camper JUSTIN": {
      "level": "24",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 391
    },
    "Pkmn Ranger JACKSON": {
      "level": "39",
      "ivs": {
        "hp": 10,
        "at": 10,
        "df": 10,
        "sa": 10,
        "sd": 10,
        "sp": 10
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1112
    },
    "Cooltrainer JONATHAN": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1176
    },
    "Cooltrainer GERALD": {
      "level": "23",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Flamethrower",
        "Fury Swipes",
        "Feint Attack",
        "Bind"
      ],
      "index": 1288
    }
  },
  "Wailord": {
    "Cooltrainer OWEN": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 160
    },
    "Champion WALLACE": {
      "level": "57",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rain Dance",
        "Water Spout",
        "Double Edge",
        "Blizzard"
      ],
      "index": 648
    },
    "Beauty THALIA": {
      "level": "40",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1835
    }
  },
  "Ludicolo": {
    "Cooltrainer WARREN": {
      "level": "33",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 174
    },
    "Cooltrainer MICHELLE": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 191
    },
    "Champion WALLACE": {
      "level": "56",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Giga Drain",
        "Surf",
        "Leech Seed",
        "Double Team"
      ],
      "index": 650
    },
    "Collector EDWIN": {
      "level": "35",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 989
    },
    "Rival BRENDAN": {
      "level": "32",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1333
    },
    "Rival MAY": {
      "level": "32",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1345
    },
    "Pkmn Breeder GABRIELLE": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1823
    }
  },
  "Delcatty": {
    "Cooltrainer MARY": {
      "level": "26",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Feint Attack",
        "Shock Wave"
      ],
      "index": 175
    },
    "Pokefan COLTON": {
      "level": "42",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Assist",
        "Charm",
        "Feint Attack",
        "Heal Bell"
      ],
      "index": 582
    },
    "Pokefan MIGUEL": {
      "level": "38",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 586
    },
    "Rival WALLY": {
      "level": "55",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sing",
        "Assist",
        "Charm",
        "Feint Attack"
      ],
      "index": 1320
    },
    "Pkmn Breeder LYDIA": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1102
    },
    "Hiker MARC": {
      "level": "15",
      "ivs": null,
      "item": "Power Anklet",
      "ability": "Normalize",
      "nature": "Brave",
      "teraType": null,
      "status": null,
      "moves": [
        "Fake Out",
        "Sing",
        "Wake-up Slap"
      ],
      "index": 1139
    },
    "Young Couple DEZ & LUKE & Young Couple LEA & JED": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1273
    },
    "Pkmn Breeder GABRIELLE": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1820
    }
  },
  "Wigglytuff": {
    "Cooltrainer ALEXIA": {
      "level": "26",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Defense Curl",
        "Double Edge",
        "Shadow Ball"
      ],
      "index": 176
    }
  },
  "Lairon": {
    "Cooltrainer KEIRA": {
      "level": "45",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 181
    },
    "Pokemaniac STEVE": {
      "level": "32",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 278
    },
    "Pkmn Breeder ISAAC": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1067
    }
  },
  "Wingull": {
    "Cooltrainer BROOKE": {
      "level": "26",
      "ivs": {
        "hp": 13,
        "at": 13,
        "df": 13,
        "sa": 13,
        "sd": 13,
        "sp": 13
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 197
    },
    "Swimmer M DARRIN": {
      "level": "24",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 287
    },
    "Swimmer M SPENCER": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 295
    },
    "Swimmer M DEAN": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 301
    },
    "Swimmer M HERMAN": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 305
    },
    "Swimmer M DUDLEY": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 314
    },
    "Kindler BERNIE": {
      "level": "26",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 377
    },
    "School Kid PAUL": {
      "level": "15",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 541
    },
    "Triathlete CHASE": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 733
    },
    "Triathlete DONNY": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 740
    },
    "Triathlete ALLISON": {
      "level": "27",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 744
    },
    "Bird Keeper PERRY": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 763
    },
    "Bird Keeper HUGH": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 764
    },
    "Bird Keeper COLIN": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 775
    },
    "Swimmer F BEVERLY": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 845
    },
    "Swimmer F DENISE": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 849
    },
    "Swimmer F ALICE": {
      "level": "24",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 856
    },
    "Twins AMY & LIV & Sailor HUEY": {
      "level": "12",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 933
    },
    "Sailor EDMOND": {
      "level": "13",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 935
    },
    "Sailor ERNEST": {
      "level": "36",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 948
    },
    "Sailor DWAYNE": {
      "level": "11",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 938
    },
    "Rival BRENDAN": {
      "level": "13",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1165
    },
    "Rival MAY": {
      "level": "13",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1180
    },
    "Pkmn Breeder LYDIA": {
      "level": "22",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1080
    },
    "Old Couple JOHN & JAY & Sis And Bro RELI & IAN": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1388
    },
    "Bird Keeper JOSUE": {
      "level": "25",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1473
    },
    "Sailor CORY": {
      "level": "30",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1734
    },
    "Pkmn Breeder MYLES": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1522
    },
    "Triathlete PABLO": {
      "level": "39",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1748
    }
  },
  "Torkoal": {
    "Cooltrainer MICHELLE": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 189
    },
    "Leader FLANNERY": {
      "level": "29",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": "White Herb",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Overheat",
        "Sunny Day",
        "Body Slam",
        "Attract"
      ],
      "index": 518
    },
    "Rival MAY": {
      "level": "13",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1537
    },
    "Leader FLANNERY & Leader FLANNERY": {
      "level": "55",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "White Herb",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Overheat",
        "Sunny Day",
        "Explosion",
        "Attract"
      ],
      "index": 1618
    }
  },
  "Skarmory": {
    "Cooltrainer CAROLINE": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 192
    },
    "Leader WINONA": {
      "level": "31",
      "ivs": {
        "hp": 26,
        "at": 26,
        "df": 26,
        "sa": 26,
        "sd": 26,
        "sp": 26
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sand Attack",
        "Fury Attack",
        "Steel Wing",
        "Aerial Ace"
      ],
      "index": 526
    },
    "Bird Keeper JARED": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 768
    },
    "Bird Keeper HUMBERTO": {
      "level": "30",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 770
    },
    "Bird Keeper AIDAN": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1365
    },
    "Bird Keeper COBY": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1428
    },
    "Bird Keeper ELIJAH": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1482
    },
    "Leader WINONA & Leader WINONA": {
      "level": "58",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Whirlwind",
        "Spikes",
        "Steel Wing",
        "Aerial Ace"
      ],
      "index": 1660
    },
    "Rival STEVEN": {
      "level": "77",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Toxic",
        "Aerial Ace",
        "Spikes",
        "Steel Wing"
      ],
      "index": 1710
    }
  },
  "Ninetales": {
    "Cooltrainer JULIE": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 195
    }
  },
  "Tropius": {
    "Cooltrainer JULIE": {
      "level": "42",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 196
    },
    "Leader WINONA": {
      "level": "29",
      "ivs": {
        "hp": 25,
        "at": 25,
        "df": 25,
        "sa": 25,
        "sd": 25,
        "sp": 25
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sunny Day",
        "Aerial Ace",
        "Solar Beam",
        "Synthesis"
      ],
      "index": 524
    },
    "Bird Keeper HUGH": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 765
    },
    "Bird Keeper JARED": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 769
    },
    "Bird Keeper PRESLEY": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 771
    },
    "Bird Keeper BECK": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 793
    },
    "Rival BRENDAN": {
      "level": "31",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1332
    },
    "Rival MAY": {
      "level": "31",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1344
    },
    "Pkmn Breeder MYLES": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1523
    },
    "Leader WINONA & Leader WINONA": {
      "level": "54",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sunny Day",
        "Aerial Ace",
        "Solar Beam",
        "Earthquake"
      ],
      "index": 1657
    },
    "Bird Keeper DARIUS": {
      "level": "30",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1709
    }
  },
  "Camerupt": {
    "Cooltrainer BROOKE": {
      "level": "34",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 207
    },
    "Leader FLANNERY": {
      "level": "26",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Overheat",
        "Tackle",
        "Sunny Day",
        "Attract"
      ],
      "index": 517
    },
    "Parasol Lady MADELINE": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Flamethrower",
        "Take Down",
        "Earthquake",
        "Sunny Day"
      ],
      "index": 844
    },
    "Magma Admin TABITHA": {
      "level": "33",
      "ivs": {
        "hp": 9,
        "at": 9,
        "df": 9,
        "sa": 9,
        "sd": 9,
        "sp": 9
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1462
    },
    "Magma Leader MAXIE": {
      "level": "44",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1467
    },
    "Cooltrainer DARCY": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1464
    },
    "Leader FLANNERY & Leader FLANNERY": {
      "level": "53",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "White Herb",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Overheat",
        "Sunny Day",
        "Earthquake",
        "Attract"
      ],
      "index": 1617
    },
    "Hiker SAWYER": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1800
    }
  },
  "Banette": {
    "Hex Maniac PATRICIA": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 209
    },
    "Elite Four PHOEBE": {
      "level": "49",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Shadow Ball",
        "Psychic",
        "Thunderbolt",
        "Facade"
      ],
      "index": 490
    },
    "School Kid JERRY": {
      "level": "34",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 549
    },
    "Psychic ALVARO": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1838
    }
  },
  "Lunatone": {
    "Hex Maniac PATRICIA": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 210
    },
    "Psychic JACKI": {
      "level": "43",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 468
    },
    "Leader TATE&LIZA & Leader JUAN": {
      "level": "42",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Light Screen",
        "Psychic",
        "Hypnosis",
        "Calm Mind"
      ],
      "index": 530
    },
    "Cooltrainer MITCHELL": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Explosion",
        "Reflect",
        "Light Screen",
        "Psychic"
      ],
      "index": 1045
    },
    "Leader TATE&LIZA & Leader TATE&LIZA": {
      "level": "65",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Chesto Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Earthquake",
        "Psychic",
        "Rest",
        "Calm Mind"
      ],
      "index": 1683
    }
  },
  "Duskull": {
    "Hex Maniac KINDRA": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 211
    },
    "Hex Maniac TAMMY": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 213
    },
    "Hex Maniac VALERIE": {
      "level": "42",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 223
    },
    "Twins AMY & LIV & Twins GINA & MIA": {
      "level": "10",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Night Shade",
        "Disable"
      ],
      "index": 925
    }
  },
  "Shuppet": {
    "Hex Maniac KINDRA": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 212
    },
    "Hex Maniac TAMMY": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 214
    },
    "Hex Maniac TASHA": {
      "level": "32",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 216
    }
  },
  "Grumpig": {
    "Hex Maniac VALERIE": {
      "level": "42",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 225
    }
  },
  "Rattata": {
    "Lady CINDY": {
      "level": "14",
      "ivs": null,
      "item": "Muscle Band",
      "ability": "Hustle",
      "nature": "Adamant",
      "teraType": null,
      "status": null,
      "moves": [
        "Quick Attack",
        "Bite",
        "Laser Focus"
      ],
      "index": 226
    }
  },
  "Swinub": {
    "Lady CINDY": {
      "level": "15",
      "ivs": null,
      "item": "Normal Gem",
      "ability": "Thick Fat",
      "nature": "Sassy",
      "teraType": null,
      "status": null,
      "moves": [
        "Ice Shard",
        "Endure",
        "Flail"
      ],
      "index": 227
    }
  },
  "Burmy": {
    "Lady CINDY": {
      "level": "15",
      "ivs": null,
      "item": "Grip Claw",
      "ability": "Overcoat",
      "nature": "Quirky",
      "teraType": null,
      "status": null,
      "moves": [
        "Bug Bite",
        "String Shot",
        "Wrap"
      ],
      "index": 228
    }
  },
  "Luvdisc": {
    "Lady DAPHNE": {
      "level": "39",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Attract",
        "Safeguard",
        "Take Down",
        "Water Pulse"
      ],
      "index": 231
    },
    "Leader TATE&LIZA & Leader JUAN": {
      "level": "41",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Water Pulse",
        "Attract",
        "Sweet Kiss",
        "Flail"
      ],
      "index": 532
    },
    "Swimmer F TANYA": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 860
    },
    "Swimmer F SUSIE": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 867
    },
    "Swimmer F SIENNA": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 871
    },
    "Swimmer F LAUREL": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 878
    },
    "Swimmer F JENNY": {
      "level": "45",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 884
    },
    "Lass ANDREA": {
      "level": "40",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1209
    },
    "Young Couple DEZ & LUKE & Young Couple LEA & JED": {
      "level": "45",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1276
    },
    "Beauty THALIA": {
      "level": "40",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1834
    }
  },
  "Seaking": {
    "Lady BRIANNA": {
      "level": "40",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": "Nugget",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 236
    },
    "Swimmer F SHARON": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 861
    },
    "Swimmer F KARA": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 868
    },
    "Swimmer F DEBRA": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 872
    },
    "Swimmer F CARLEE": {
      "level": "35",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 879
    },
    "Pkmn Breeder LYDIA": {
      "level": "31",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1103
    }
  },
  "Goldeen": {
    "Beauty CONNIE": {
      "level": "40",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 247
    },
    "Youngster BILLY": {
      "level": "19",
      "ivs": null,
      "item": "Oran Berry",
      "ability": null,
      "nature": "Hasty",
      "teraType": null,
      "status": null,
      "moves": [
        "Horn Drill"
      ],
      "index": 619
    },
    "Fisherman CLAUDE": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 661
    },
    "Swimmer F DENISE": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 850
    },
    "Swimmer F BETH": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 851
    },
    "Swimmer F MISSY": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 854
    },
    "Swimmer F ALICE": {
      "level": "24",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 857
    },
    "Swimmer F BRENDA": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 864
    },
    "Swimmer F KATIE": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 865
    },
    "Pkmn Breeder LYDIA": {
      "level": "28",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1097
    },
    "Lass CRISSY": {
      "level": "39",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1210
    },
    "Young Couple KIRA & DAN & Beauty JOHANNA": {
      "level": "13",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1287
    },
    "Sis And Bro LILA & ROY & Sis And Bro LISA & RAY": {
      "level": "27",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1399
    },
    "Parasol Lady RACHEL": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1515
    }
  },
  "Clamperl": {
    "Beauty OLIVIA": {
      "level": "35",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Iron Defense",
        "Whirlpool",
        "Rain Dance",
        "Water Pulse"
      ],
      "index": 249
    }
  },
  "Corphish": {
    "Beauty OLIVIA": {
      "level": "37",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Taunt",
        "Crabhammer",
        "Water Pulse"
      ],
      "index": 250
    }
  },
  "Lombre": {
    "Beauty OLIVIA": {
      "level": "39",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Uproar",
        "Fury Swipes",
        "Fake Out",
        "Water Pulse"
      ],
      "index": 251
    },
    "Picnicker CAROL": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 892
    },
    "Picnicker NANCY": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 894
    },
    "Collector EDWIN": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 987
    },
    "Rival BRENDAN": {
      "level": "29",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1014
    },
    "Rival MAY": {
      "level": "29",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1035
    },
    "Pkmn Ranger LORENZO": {
      "level": "28",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1107
    },
    "Pkmn Ranger JENNA": {
      "level": "28",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1117
    },
    "Lass HALEY": {
      "level": "34",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1203
    },
    "Picnicker SOPHIE": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1427
    },
    "Picnicker ANGELINA": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1434
    },
    "Picnicker CELIA": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1484
    },
    "Pkmn Breeder GABRIELLE": {
      "level": "35",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1817
    }
  },
  "Whiscash": {
    "Expert MOLLIE": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 263
    },
    "Leader TATE&LIZA & Leader JUAN": {
      "level": "41",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rain Dance",
        "Water Pulse",
        "Amnesia",
        "Earthquake"
      ],
      "index": 533
    },
    "Champion WALLACE": {
      "level": "56",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Earthquake",
        "Surf",
        "Amnesia",
        "Hyper Beam"
      ],
      "index": 651
    },
    "Leader JUAN & Leader JUAN": {
      "level": "63",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rain Dance",
        "Water Pulse",
        "Double Team",
        "Fissure"
      ],
      "index": 1702
    }
  },
  "Meditite": {
    "Expert MOLLIE": {
      "level": "33",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 264
    },
    "Leader BRAWLY": {
      "level": "16",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Focus Punch",
        "Light Screen",
        "Reflect",
        "Bulk Up"
      ],
      "index": 509
    },
    "School Kid JERRY": {
      "level": "29",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 545
    },
    "Winstrate VICKY": {
      "level": "18",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "High Jump Kick",
        "Meditate",
        "Confusion",
        "Detect"
      ],
      "index": 607
    },
    "Expert SHELBY": {
      "level": "30",
      "ivs": {
        "hp": 25,
        "at": 25,
        "df": 25,
        "sa": 25,
        "sd": 25,
        "sp": 25
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 610
    },
    "Battle Girl JOCELYN": {
      "level": "13",
      "ivs": {
        "hp": 15,
        "at": 15,
        "df": 15,
        "sa": 15,
        "sd": 15,
        "sp": 15
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 821
    },
    "Battle Girl LAURA": {
      "level": "13",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 822
    },
    "Battle Girl CYNDY": {
      "level": "29",
      "ivs": {
        "hp": 14,
        "at": 14,
        "df": 14,
        "sa": 14,
        "sd": 14,
        "sp": 14
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 829
    },
    "Battle Girl CORA": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 825
    },
    "Battle Girl REYNA": {
      "level": "33",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 971
    },
    "Battle Girl LILITH": {
      "level": "13",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1142
    },
    "Hex Maniac SYLVIA": {
      "level": "36",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1144
    },
    "Battle Girl VIVIAN": {
      "level": "17",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder Punch",
        "Detect",
        "Confusion",
        "Meditate"
      ],
      "index": 1290
    },
    "Battle Girl DANIELLE": {
      "level": "23",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Bide",
        "Detect",
        "Confusion",
        "Fire Punch"
      ],
      "index": 1291
    },
    "Battle Girl HELENE": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1499
    },
    "Psychic MARLENE": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1501
    },
    "Battle Girl AISHA": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1509
    },
    "Battle Girl CALLIE": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1517
    },
    "Leader BRAWLY & Leader BRAWLY": {
      "level": "33",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Psychic",
        "Light Screen",
        "Reflect",
        "Focus Punch"
      ],
      "index": 1560
    }
  },
  "Aron": {
    "Pokemaniac STEVE": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 270
    },
    "Youngster DILLON": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 632
    },
    "Youngster TIMMY": {
      "level": "15",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 646
    },
    "Pkmn Breeder ISAAC": {
      "level": "28",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1061
    },
    "Pokemaniac WYATT": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1433
    },
    "Youngster DEANDRE": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1439
    }
  },
  "Horsea": {
    "Beauty THALIA": {
      "level": "34",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1827
    },
    "Swimmer M STAN": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 298
    },
    "Swimmer F TARA": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 852
    },
    "Swimmer F LINDA": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 873
    }
  },
  "Rhyhorn": {
    "Pokemaniac MARK": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 273
    },
    "Pokemaniac STEVE": {
      "level": "32",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 279
    }
  },
  "Aggron": {
    "Pokemaniac STEVE": {
      "level": "35",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 280
    },
    "Rival STEVEN": {
      "level": "76",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Earthquake",
        "Solar Beam",
        "Dragon Claw"
      ],
      "index": 1712
    }
  },
  "Rhydon": {
    "Pokemaniac STEVE": {
      "level": "35",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 281
    }
  },
  "Tentacool": {
    "Swimmer M DOMINIK": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 283
    },
    "Swimmer M DOUGLAS": {
      "level": "24",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 285
    },
    "Swimmer M DARRIN": {
      "level": "24",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 288
    },
    "Swimmer M DAVID": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 292
    },
    "Swimmer M SPENCER": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 294
    },
    "Swimmer M DUDLEY": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 313
    },
    "Swimmer M CHAD": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 316
    },
    "Fisherman ANDREW": {
      "level": "10",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 655
    },
    "Fisherman ELLIOT": {
      "level": "26",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 682
    },
    "Fisherman NED": {
      "level": "11",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 666
    },
    "Fisherman DALE": {
      "level": "11",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 669
    },
    "Fisherman BARNY": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 672
    },
    "Fisherman WADE": {
      "level": "16",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 674
    },
    "Sailor DWAYNE": {
      "level": "11",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 940
    },
    "Sailor ERNEST": {
      "level": "42",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 955
    },
    "Fisherman JONAH": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1349
    },
    "Fisherman WAYNE": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1362
    },
    "Sis And Bro LILA & ROY & Sis And Bro LISA & RAY": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1400
    },
    "Fisherman CHRIS": {
      "level": "20",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1402
    },
    "Tuber M CHANDLER": {
      "level": "12",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1414
    },
    "Swimmer M PETE": {
      "level": "15",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1468
    },
    "Sailor CORY": {
      "level": "32",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1739
    }
  },
  "Tentacruel": {
    "Swimmer M JEROME": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 290
    },
    "Swimmer M NOLEN": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 297
    },
    "Swimmer M HERMAN": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 306
    },
    "Swimmer M SANTIAGO": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 307
    },
    "Swimmer M DUDLEY": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 315
    },
    "Champion WALLACE": {
      "level": "55",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Toxic",
        "Hydro Pump",
        "Sludge Bomb",
        "Ice Beam"
      ],
      "index": 649
    },
    "Fisherman CARTER": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 676
    },
    "Fisherman ELLIOT": {
      "level": "35",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 691
    },
    "Sailor PHILLIP": {
      "level": "44",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 941
    },
    "Sailor ERNEST": {
      "level": "45",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 959
    },
    "Swimmer M HARRISON": {
      "level": "35",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1148
    },
    "Fisherman HENRY": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1352
    },
    "Sailor CORY": {
      "level": "36",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1745
    }
  },
  "Sealeo": {
    "Swimmer M FRANKLIN": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 310
    },
    "Elite Four GLACIA": {
      "level": "52",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Attract",
        "Double Edge",
        "Hail",
        "Blizzard"
      ],
      "index": 494
    },
    "Leader TATE&LIZA & Leader JUAN": {
      "level": "43",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Encore",
        "Body Slam",
        "Aurora Beam",
        "Water Pulse"
      ],
      "index": 534
    }
  },
  "Spheal": {
    "Swimmer M KEVIN": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 311
    },
    "Swimmer F NIKKI": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 863
    },
    "Swimmer F KATIE": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 866
    },
    "Sailor DUNCAN": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 946
    },
    "Sailor KELVIN": {
      "level": "33",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 969
    },
    "Swimmer M REED": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1366
    }
  },
  "Staryu": {
    "Swimmer M TONY": {
      "level": "34",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 320
    },
    "Triathlete CAMDEN": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 727
    },
    "Triathlete ISAIAH": {
      "level": "42",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 736
    },
    "Triathlete PABLO": {
      "level": "41",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1753
    },
    "Triathlete CHASE": {
      "level": "34",
      "ivs": {
        "hp": 9,
        "at": 9,
        "df": 9,
        "sa": 9,
        "sd": 9,
        "sp": 9
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 734
    },
    "Triathlete ISOBEL": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 739
    },
    "Triathlete DONNY": {
      "level": "34",
      "ivs": {
        "hp": 19,
        "at": 19,
        "df": 19,
        "sa": 19,
        "sd": 19,
        "sp": 19
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 741
    },
    "Triathlete TALIA": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 742
    },
    "Triathlete KATELYN": {
      "level": "42",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 747
    },
    "Triathlete ALLISON": {
      "level": "33",
      "ivs": {
        "hp": 29,
        "at": 29,
        "df": 29,
        "sa": 29,
        "sd": 29,
        "sp": 29
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 745
    },
    "Swimmer F JENNY": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 882
    },
    "Triathlete ISABELLA": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1169
    },
    "Triathlete CAMRON": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1474
    }
  },
  "Machop": {
    "Black Belt TAKAO": {
      "level": "13",
      "ivs": {
        "hp": 15,
        "at": 15,
        "df": 15,
        "sa": 15,
        "sd": 15,
        "sp": 15
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 324
    },
    "Black Belt HITOSHI": {
      "level": "32",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 325
    },
    "Black Belt KOICHI": {
      "level": "24",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 328
    },
    "Black Belt NOB": {
      "level": "33",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 337
    },
    "Black Belt DAISUKE": {
      "level": "19",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 343
    },
    "Leader BRAWLY": {
      "level": "16",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Karate Chop",
        "Low Kick",
        "Seismic Toss",
        "Bulk Up"
      ],
      "index": 508
    },
    "Youngster JOEY": {
      "level": "9",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 624
    },
    "Twins AMY & LIV & Sailor HUEY": {
      "level": "12",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 934
    },
    "Sailor DWAYNE": {
      "level": "11",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 939
    },
    "Sailor LEONARD": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 943
    },
    "Sailor BRENDEN": {
      "level": "13",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1141
    },
    "Hiker BRICE": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1237
    },
    "Hiker LENNY": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1242
    },
    "Hiker MIKE": {
      "level": "16",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1256
    },
    "Sailor CORY": {
      "level": "34",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1741
    },
    "Hiker SAWYER": {
      "level": "30",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1796
    }
  },
  "Machamp": {
    "Black Belt NOB": {
      "level": "33",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": "Black Belt",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 340
    },
    "Expert AURON": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 967
    },
    "Leader BRAWLY & Leader BRAWLY": {
      "level": "48",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Cross Chop",
        "Rock Slide",
        "Focus Punch",
        "Bulk Up"
      ],
      "index": 1574
    },
    "Black Belt KOJI": {
      "level": "43",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1767
    }
  },
  "Slugma": {
    "Kindler JEFF": {
      "level": "22",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 370
    },
    "Kindler JACE": {
      "level": "23",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 372
    },
    "Kindler KEEGAN": {
      "level": "23",
      "ivs": {
        "hp": 14,
        "at": 14,
        "df": 14,
        "sa": 14,
        "sd": 14,
        "sp": 14
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 373
    },
    "Kindler BERNIE": {
      "level": "32",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 380
    },
    "Leader FLANNERY": {
      "level": "24",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Overheat",
        "Smog",
        "Light Screen",
        "Sunny Day"
      ],
      "index": 516
    },
    "Rival BRENDAN": {
      "level": "32",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1334
    },
    "Rival MAY": {
      "level": "32",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1346
    },
    "Kindler BRYANT": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1490
    },
    "Kindler DAYTON": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1513
    }
  },
  "Magcargo": {
    "Kindler BERNIE": {
      "level": "35",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 382
    },
    "Leader FLANNERY & Leader FLANNERY": {
      "level": "53",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "White Herb",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Overheat",
        "Attract",
        "Light Screen",
        "Rock Slide"
      ],
      "index": 1614
    }
  },
  "Nuzleaf": {
    "Camper LARRY": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 388
    },
    "Camper SHANE": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 390
    },
    "Collector EDWIN": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 988
    },
    "Pkmn Ranger LORENZO": {
      "level": "28",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1106
    },
    "Pkmn Ranger JENNA": {
      "level": "28",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1118
    },
    "Picnicker CHARLOTTE": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1437
    },
    "Camper BRANDEN": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1488
    },
    "Pkmn Breeder GABRIELLE": {
      "level": "35",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1818
    }
  },
  "Surskit": {
    "Bug Maniac BRENT": {
      "level": "26",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 406
    },
    "Bug Maniac JEFFREY": {
      "level": "38",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 430
    },
    "Bug Catcher JAMES": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1232
    }
  },
  "Wurmple": {
    "Bug Maniac DONALD": {
      "level": "24",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 407
    },
    "Bug Maniac TAYLOR": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 410
    },
    "Bug Maniac JEFFREY": {
      "level": "36",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 425
    },
    "Bug Catcher RICK": {
      "level": "4",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1213
    },
    "Bug Catcher JOSE": {
      "level": "8",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1217
    }
  },
  "Silcoon": {
    "Bug Maniac DONALD": {
      "level": "24",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 408
    }
  },
  "Beautifly": {
    "Bug Maniac DONALD": {
      "level": "24",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 409
    },
    "Bug Maniac DEREK": {
      "level": "16",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 417
    },
    "Bug Maniac JEFFREY": {
      "level": "38",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 432
    },
    "School Kid GEORGIA": {
      "level": "16",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 553
    },
    "Twins GINA & MIA & Twins MIU & YUKI": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 921
    },
    "Bug Catcher LYLE": {
      "level": "14",
      "ivs": null,
      "item": "Lum Berry",
      "ability": "Rivalry",
      "nature": "Rash",
      "teraType": null,
      "status": null,
      "moves": [
        "Air Cutter",
        "Poison Sting",
        "Silver Wind"
      ],
      "index": 1214
    },
    "Sr And Jr TYRA & IVY & Young Couple MEL & PAUL": {
      "level": "27",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Gust",
        "Mega Drain",
        "Attract",
        "Stun Spore"
      ],
      "index": 1376
    },
    "Bug Maniac CALE": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1520
    }
  },
  "Cascoon": {
    "Bug Maniac TAYLOR": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 411
    }
  },
  "Dustox": {
    "Bug Maniac TAYLOR": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 412
    },
    "Bug Maniac DEREK": {
      "level": "16",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 416
    },
    "Bug Maniac JEFFREY": {
      "level": "38",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 429
    },
    "Twins GINA & MIA & Twins MIU & YUKI": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 922
    },
    "Bug Catcher JAMES": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1234
    },
    "Sr And Jr TYRA & IVY & Young Couple MEL & PAUL": {
      "level": "27",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Gust",
        "Psybeam",
        "Toxic",
        "Protect"
      ],
      "index": 1375
    },
    "Bug Maniac CALE": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1519
    }
  },
  "Masquerain": {
    "Bug Maniac JEFFREY": {
      "level": "38",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": "Silver Powder",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 431
    }
  },
  "Abra": {
    "Psychic EDWARD": {
      "level": "15",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hidden Power"
      ],
      "index": 433
    },
    "Psychic JACLYN": {
      "level": "16",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hidden Power"
      ],
      "index": 451
    }
  },
  "Kirlia": {
    "Psychic PRESTON": {
      "level": "36",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 434
    },
    "Psychic WILLIAM": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 439
    },
    "Psychic HANNAH": {
      "level": "36",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 452
    },
    "Psychic ALEXIS": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 458
    },
    "School Kid JERRY": {
      "level": "34",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 548
    },
    "Psychic ALIX": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1498
    }
  },
  "Ralts": {
    "Psychic VIRGIL": {
      "level": "36",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 435
    },
    "Psychic WILLIAM": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 438
    },
    "School Kid JERRY": {
      "level": "26",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 542
    },
    "School Kid TED": {
      "level": "17",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 538
    },
    "Rival WALLY": {
      "level": "16",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1303
    },
    "Psychic BRANDI": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1508
    }
  },
  "Girafarig": {
    "Psychic BLAKE": {
      "level": "36",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 436
    },
    "Psychic TERRY": {
      "level": "37",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1151
    },
    "Gentleman CLIFFORD": {
      "level": "36",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1154
    }
  },
  "Solrock": {
    "Psychic JOSHUA": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 441
    },
    "Psychic CAMERON": {
      "level": "45",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 449
    },
    "Cooltrainer MITCHELL": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Explosion",
        "Reflect",
        "Light Screen",
        "Shadow Ball"
      ],
      "index": 1046
    },
    "Leader TATE&LIZA & Leader TATE&LIZA": {
      "level": "65",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sunny Day",
        "Solar Beam",
        "Psychic",
        "Flamethrower"
      ],
      "index": 1684
    }
  },
  "Alakazam": {
    "Psychic CAMERON": {
      "level": "45",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 450
    },
    "Psychic JACKI": {
      "level": "43",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 469
    }
  },
  "Wobbuffet": {
    "Psychic KAYLA": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 455
    },
    "Psychic CEDRIC": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Destiny Bond",
        "Safeguard",
        "Counter",
        "Mirror Coat"
      ],
      "index": 900
    },
    "Psychic NICHOLAS": {
      "level": "36",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1155
    },
    "Gentleman EVERETT": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1840
    }
  },
  "Natu": {
    "Psychic KAYLA": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 456
    },
    "Bird Keeper COLIN": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 776
    },
    "Bird Keeper ROBERT": {
      "level": "38",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 787
    },
    "Bird Keeper ALEX": {
      "level": "33",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 791
    },
    "Psychic MACEY": {
      "level": "36",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1162
    }
  },
  "Golduck": {
    "Gentleman WALTER": {
      "level": "41",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Fury Swipes",
        "Disable",
        "Confusion",
        "Psych Up"
      ],
      "index": 480
    }
  },
  "Crawdaunt": {
    "Elite Four SIDNEY": {
      "level": "48",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Surf",
        "Swords Dance",
        "Strength",
        "Facade"
      ],
      "index": 485
    },
    "Leader TATE&LIZA & Leader JUAN": {
      "level": "43",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Water Pulse",
        "Crabhammer",
        "Taunt",
        "Leer"
      ],
      "index": 535
    },
    "Leader JUAN & Leader JUAN": {
      "level": "63",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Chesto Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rest",
        "Guillotine",
        "Taunt",
        "Double Team"
      ],
      "index": 1705
    }
  },
  "Absol": {
    "Elite Four SIDNEY": {
      "level": "49",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Aerial Ace",
        "Rock Slide",
        "Swords Dance",
        "Slash"
      ],
      "index": 486
    },
    "Cooltrainer 2 JAZMYN": {
      "level": "27",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 963
    },
    "Cooltrainer HALLE": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1078
    }
  },
  "Dusclops": {
    "Elite Four PHOEBE": {
      "level": "51",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Shadow Ball",
        "Ice Beam",
        "Rock Slide",
        "Earthquake"
      ],
      "index": 491
    },
    "Cooltrainer QUINCY": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Skill Swap",
        "Protect",
        "Will O Wisp",
        "Toxic"
      ],
      "index": 628
    }
  },
  "Glalie": {
    "Elite Four GLACIA": {
      "level": "52",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Shadow Ball",
        "Explosion",
        "Hail",
        "Ice Beam"
      ],
      "index": 495
    }
  },
  "Walrein": {
    "Elite Four GLACIA": {
      "level": "53",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Surf",
        "Body Slam",
        "Ice Beam",
        "Sheer Cold"
      ],
      "index": 496
    },
    "Leader JUAN & Leader JUAN": {
      "level": "63",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Water Pulse",
        "Body Slam",
        "Protect",
        "Sheer Cold"
      ],
      "index": 1704
    }
  },
  "Shelgon": {
    "Elite Four DRAKE": {
      "level": "52",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rock Tomb",
        "Dragon Claw",
        "Protect",
        "Double Edge"
      ],
      "index": 497
    },
    "Dragon Tamer NICOLAS": {
      "level": "49",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": "Dragon Fang",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 761
    }
  },
  "Altaria": {
    "Elite Four DRAKE": {
      "level": "54",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Double Edge",
        "Dragon Breath",
        "Dragon Dance",
        "Aerial Ace"
      ],
      "index": 498
    },
    "Leader WINONA": {
      "level": "33",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Earthquake",
        "Dragon Breath",
        "Dragon Dance",
        "Aerial Ace"
      ],
      "index": 527
    },
    "Dragon Tamer NICOLAS": {
      "level": "49",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 760
    },
    "Bird Keeper ROBERT": {
      "level": "41",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 789
    },
    "Picnicker DIANA": {
      "level": "40",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 914
    },
    "Rival WALLY": {
      "level": "56",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Aerial Ace",
        "Safeguard",
        "Dragon Breath",
        "Dragon Dance"
      ],
      "index": 1319
    },
    "Leader WINONA & Leader WINONA": {
      "level": "60",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Chesto Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sky Attack",
        "Rest",
        "Dragon Dance",
        "Earthquake"
      ],
      "index": 1661
    }
  },
  "Kingdra": {
    "Elite Four DRAKE": {
      "level": "53",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Smokescreen",
        "Dragon Dance",
        "Surf",
        "Body Slam"
      ],
      "index": 499
    },
    "Leader TATE&LIZA & Leader JUAN": {
      "level": "46",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": "Chesto Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Water Pulse",
        "Double Team",
        "Ice Beam",
        "Rest"
      ],
      "index": 536
    },
    "Leader JUAN & Leader JUAN": {
      "level": "66",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Chesto Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Water Pulse",
        "Double Team",
        "Ice Beam",
        "Rest"
      ],
      "index": 1706
    },
    "Beauty THALIA": {
      "level": "40",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1836
    }
  },
  "Flygon": {
    "Elite Four DRAKE": {
      "level": "53",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Flamethrower",
        "Crunch",
        "Dragon Breath",
        "Earthquake"
      ],
      "index": 500
    }
  },
  "Salamence": {
    "Elite Four DRAKE": {
      "level": "55",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Flamethrower",
        "Dragon Claw",
        "Rock Slide",
        "Crunch"
      ],
      "index": 501
    }
  },
  "Watchog": {
    "Leader ROXANNE": {
      "level": "16",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 0
      },
      "item": "Lagging Tail",
      "ability": "Analytic",
      "nature": "Brave",
      "teraType": null,
      "status": null,
      "moves": [
        "Hypnosis",
        "Thunder Punch",
        "Slash",
        "Switcheroo"
      ],
      "index": 502
    }
  },
  "Munchlax": {
    "Leader ROXANNE": {
      "level": "16",
      "ivs": null,
      "item": "Starf Berry",
      "ability": "Gluttony",
      "nature": "Lax",
      "teraType": null,
      "status": null,
      "moves": [
        "Belly Drum",
        "Defense Curl",
        "Mega Punch",
        "Rollout"
      ],
      "index": 503
    }
  },
  "Persian": {
    "Leader ROXANNE": {
      "level": "17",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 20,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Loaded Dice",
      "ability": "Limber",
      "nature": "Lonely",
      "teraType": null,
      "status": null,
      "moves": [
        "Fury Swipes",
        "Parting Shot",
        "Thunder Wave"
      ],
      "index": 504
    }
  },
  "Yungoos": {
    "Leader ROXANNE": {
      "level": "16",
      "ivs": null,
      "item": "Red Card",
      "ability": "Stakeout",
      "nature": "Hasty",
      "teraType": null,
      "status": null,
      "moves": [
        "Retaliate",
        "Work Up",
        "Mud-Slap",
        "Pursuit"
      ],
      "index": 506
    }
  },
  "Purugly": {
    "Leader ROXANNE": {
      "level": "18",
      "ivs": null,
      "item": "Berserk Gene",
      "ability": "Thick Fat",
      "nature": "Jolly",
      "teraType": null,
      "status": null,
      "moves": [
        "Take Down",
        "Nasty Plot",
        "Aerial Ace",
        "Rest"
      ],
      "index": 507
    }
  },
  "Slaking": {
    "Leader NORMAN": {
      "level": "31",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Counter",
        "Yawn",
        "Facade",
        "Feint Attack"
      ],
      "index": 522
    },
    "Sr And Jr KATE & JOY & Sr And Jr ANNA & MEG": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Focus Punch",
        "Yawn",
        "Slack Off",
        "Feint Attack"
      ],
      "index": 563
    },
    "Cooltrainer QUINCY": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Attract",
        "Ice Beam",
        "Thunderbolt",
        "Flamethrower"
      ],
      "index": 627
    },
    "Cooltrainer KATELYNN": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Earthquake",
        "Shadow Ball",
        "Aerial Ace",
        "Brick Break"
      ],
      "index": 630
    },
    "Leader NORMAN & Leader NORMAN": {
      "level": "60",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hyper Beam",
        "Flamethrower",
        "Thunderbolt",
        "Shadow Ball"
      ],
      "index": 1638
    },
    "Cooltrainer CRISTIN": {
      "level": "41",
      "ivs": {
        "hp": 17,
        "at": 17,
        "df": 17,
        "sa": 17,
        "sd": 17,
        "sp": 17
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1778
    }
  },
  "Swablu": {
    "Leader WINONA": {
      "level": "29",
      "ivs": {
        "hp": 25,
        "at": 25,
        "df": 25,
        "sa": 25,
        "sd": 25,
        "sp": 25
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Perish Song",
        "Mirror Move",
        "Safeguard",
        "Aerial Ace"
      ],
      "index": 523
    },
    "Bird Keeper ROBERT": {
      "level": "32",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 784
    },
    "Picnicker MARTHA": {
      "level": "23",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 896
    },
    "Picnicker DIANA": {
      "level": "31",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 911
    },
    "Pkmn Ranger SOPHIA": {
      "level": "38",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1119
    },
    "Picnicker ASHLEY": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1302
    },
    "Twins TORI & TIA & Sr And Jr KIM & IRIS": {
      "level": "32",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sing",
        "Fury Attack",
        "Safeguard",
        "Aerial Ace"
      ],
      "index": 1371
    }
  },
  "Oddish": {
    "School Kid PAUL": {
      "level": "15",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 540
    },
    "Picnicker DIANA": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 898
    },
    "Lass SALLY": {
      "level": "16",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1205
    }
  },
  "Pikachu": {
    "Pokefan VANESSA": {
      "level": "30",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 588
    },
    "Leader WATTSON & Leader WATTSON": {
      "level": "39",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Slam",
        "Rain Dance",
        "Shock Wave"
      ],
      "index": 1582
    }
  },
  "Plusle": {
    "Pokefan ISABEL": {
      "level": "35",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 600
    },
    "Twins AMY & LIV & Twins AMY & LIV": {
      "level": "33",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Spark",
        "Charge",
        "Fake Tears",
        "Helping Hand"
      ],
      "index": 929
    },
    "Twins AMY & LIV & Twins GINA & MIA": {
      "level": "9",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 923
    },
    "Twins AMY & LIV & Sailor HUEY": {
      "level": "36",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Charge",
        "Fake Tears",
        "Helping Hand"
      ],
      "index": 931
    },
    "Pokefan KALEB": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1416
    }
  },
  "Minun": {
    "Pokefan ISABEL": {
      "level": "35",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 601
    },
    "Twins AMY & LIV & Twins AMY & LIV": {
      "level": "33",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Spark",
        "Charge",
        "Charm",
        "Helping Hand"
      ],
      "index": 930
    },
    "Twins AMY & LIV & Twins GINA & MIA": {
      "level": "9",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 924
    },
    "Twins AMY & LIV & Sailor HUEY": {
      "level": "36",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Charge",
        "Charm",
        "Helping Hand"
      ],
      "index": 932
    },
    "Pokefan KALEB": {
      "level": "14",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1415
    }
  },
  "Skwovet": {
    "Youngster TOMMY": {
      "level": "15",
      "ivs": null,
      "item": "Oran Berry",
      "ability": "Cheek Pouch",
      "nature": "Quirky",
      "teraType": null,
      "status": null,
      "moves": [
        "Stockpile",
        "Swallow",
        "Headbutt"
      ],
      "index": 622
    }
  },
  "Tandemaus": {
    "Youngster TOMMY": {
      "level": "16",
      "ivs": null,
      "item": "Lum Berry",
      "ability": "Run Away",
      "nature": "Adamant",
      "teraType": null,
      "status": null,
      "moves": [
        "Population Bomb"
      ],
      "index": 623
    }
  },
  "Gulpin": {
    "Youngster BEN": {
      "level": "17",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Amnesia",
        "Sludge",
        "Yawn",
        "Pound"
      ],
      "index": 626
    },
    "Ninja Boy JAIDEN": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1496
    },
    "Pkmn Breeder PAT": {
      "level": "25",
      "ivs": {
        "hp": 1,
        "at": 1,
        "df": 1,
        "sa": 1,
        "sd": 1,
        "sp": 1
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1532
    }
  },
  "Gardevoir": {
    "Cooltrainer KATELYNN": {
      "level": "43",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Skill Swap",
        "Psychic",
        "Thunderbolt",
        "Calm Mind"
      ],
      "index": 629
    },
    "Rival WALLY": {
      "level": "57",
      "ivs": {
        "hp": 30,
        "at": 30,
        "df": 30,
        "sa": 30,
        "sd": 30,
        "sp": 30
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Double Team",
        "Calm Mind",
        "Psychic",
        "Future Sight"
      ],
      "index": 1323
    }
  },
  "Milotic": {
    "Champion WALLACE": {
      "level": "58",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Recover",
        "Surf",
        "Ice Beam",
        "Toxic"
      ],
      "index": 653
    }
  },
  "Magikarp": {
    "Fisherman ANDREW": {
      "level": "15",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 656
    },
    "Fisherman IVAN": {
      "level": "7",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 659
    },
    "Fisherman CLAUDE": {
      "level": "16",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 660
    },
    "Fisherman ELLIOT": {
      "level": "10",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 665
    },
    "Fisherman RONALD": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 692
    },
    "Fisherman ROGER": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1354
    },
    "Fisherman CHRIS": {
      "level": "29",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1401
    },
    "Fisherman DARIAN": {
      "level": "13",
      "ivs": null,
      "item": "Wide Lens",
      "ability": "Swift Swim",
      "nature": "Calm",
      "teraType": null,
      "status": null,
      "moves": [
        "Bounce",
        "Aqua Tail",
        "Rain Dance"
      ],
      "index": 1410
    }
  },
  "Barboach": {
    "Fisherman CLAUDE": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 662
    },
    "Fisherman NOLAN": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 671
    },
    "Fisherman KAI": {
      "level": "19",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1436
    }
  },
  "Doduo": {
    "Triathlete DYLAN": {
      "level": "31",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 718
    },
    "Triathlete MARIA": {
      "level": "31",
      "ivs": {
        "hp": 2,
        "at": 2,
        "df": 2,
        "sa": 2,
        "sd": 2,
        "sp": 2
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 723
    },
    "Bird Keeper JARED": {
      "level": "27",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 767
    },
    "Bird Keeper EDWARDO": {
      "level": "29",
      "ivs": {
        "hp": 18,
        "at": 18,
        "df": 18,
        "sa": 18,
        "sd": 18,
        "sp": 18
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 773
    },
    "Triathlete KYRA": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1493
    },
    "Triathlete MELINA": {
      "level": "17",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1507
    }
  },
  "Bagon": {
    "Dragon Tamer NICOLAS": {
      "level": "46",
      "ivs": {
        "hp": 15,
        "at": 15,
        "df": 15,
        "sa": 15,
        "sd": 15,
        "sp": 15
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 756
    },
    "Dragon Tamer AARON": {
      "level": "34",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Dragon Breath",
        "Headbutt",
        "Focus Energy",
        "Ember"
      ],
      "index": 762
    }
  },
  "Ninjask": {
    "Ninja Boy YASU": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 794
    },
    "Ninja Boy TAKASHI": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 795
    },
    "Ninja Boy LUNG": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 804
    },
    "Bug Catcher DOUG": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1220
    },
    "Bug Catcher KENT": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1223
    },
    "Bug Catcher JAMES": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1235
    },
    "Ninja Boy KEIGO": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sand Attack",
        "Double Team",
        "Fury Cutter",
        "Swords Dance"
      ],
      "index": 1295
    },
    "Ninja Boy JAIDEN": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1495
    }
  },
  "Koffing": {
    "Ninja Boy TAKASHI": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 796
    },
    "Ninja Boy LAO": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Poison Gas",
        "Tackle",
        "Sludge",
        "Self Destruct"
      ],
      "index": 819
    },
    "Ninja Boy LUNG": {
      "level": "18",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 803
    },
    "Ninja Boy JONAS": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Toxic",
        "Thunder",
        "Self Destruct",
        "Sludge Bomb"
      ],
      "index": 964
    },
    "Ninja Boy HIDEO": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Tackle",
        "Poison Gas",
        "Sludge",
        "Smokescreen"
      ],
      "index": 1293
    },
    "Ninja Boy KEIGO": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Poison Gas",
        "Self Destruct",
        "Sludge",
        "Smokescreen"
      ],
      "index": 1294
    },
    "Ninja Boy RILEY": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Tackle",
        "Self Destruct",
        "Sludge",
        "Smokescreen"
      ],
      "index": 1297
    }
  },
  "Lanturn": {
    "Cooltrainer DIANNE": {
      "level": "43",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunderbolt",
        "Earthquake"
      ],
      "index": 798
    },
    "Swimmer F KAYLEE": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 875
    },
    "Sis And Bro LILA & ROY & Sis And Bro LILA & ROY": {
      "level": "48",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1395
    },
    "Sis And Bro LILA & ROY & Sis And Bro LISA & RAY": {
      "level": "51",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1397
    }
  },
  "Weezing": {
    "Ninja Boy LAO": {
      "level": "35",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": "Smoke Ball",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Tackle",
        "Sludge"
      ],
      "index": 820
    }
  },
  "Castform": {
    "Parasol Lady ANGELICA": {
      "level": "30",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rain Dance",
        "Weather Ball",
        "Thunder",
        "Water Pulse"
      ],
      "index": 838
    },
    "Parasol Lady KAYLEY": {
      "level": "31",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sunny Day",
        "Weather Ball",
        "Flamethrower",
        "Solar Beam"
      ],
      "index": 965
    }
  },
  "Seadra": {
    "Swimmer F LINDA": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 874
    },
    "Beauty THALIA": {
      "level": "38",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1833
    }
  },
  "Vileplume": {
    "Picnicker DIANA": {
      "level": "40",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 913
    }
  },
  "Feebas": {
    "Pokefan ANNIKA": {
      "level": "39",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": "Oran Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Flail",
        "Water Pulse",
        "Return",
        "Attract"
      ],
      "index": 962
    },
    "Fisherman CHRIS": {
      "level": "26",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1403
    },
    "Fisherman DARIAN": {
      "level": "12",
      "ivs": null,
      "item": "Choice Specs",
      "ability": "Adaptability",
      "nature": "Docile",
      "teraType": null,
      "status": null,
      "moves": [
        "Bubble"
      ],
      "index": 1409
    }
  },
  "Chinchou": {
    "Expert CONOR": {
      "level": "33",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 974
    },
    "Swimmer F TISHA": {
      "level": "34",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1368
    },
    "Sis And Bro LILA & ROY & Sis And Bro LILA & ROY": {
      "level": "42",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1391
    }
  },
  "Treecko": {
    "Rival BRENDAN": {
      "level": "15",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1166
    },
    "Rival MAY": {
      "level": "15",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1181
    }
  },
  "Grovyle": {
    "Rival BRENDAN": {
      "level": "34",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1327
    },
    "Rival MAY": {
      "level": "34",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1339
    }
  },
  "Torchic": {
    "Rival BRENDAN": {
      "level": "15",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1164
    },
    "Rival MAY": {
      "level": "15",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1536
    }
  },
  "Combusken": {
    "Rival BRENDAN": {
      "level": "34",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1331
    },
    "Rival MAY": {
      "level": "34",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1343
    }
  },
  "Mudkip": {
    "Rival BRENDAN": {
      "level": "15",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1179
    },
    "Rival MAY": {
      "level": "15",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1538
    }
  },
  "Marshtomp": {
    "Rival BRENDAN": {
      "level": "34",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1335
    },
    "Rival MAY": {
      "level": "34",
      "ivs": {
        "hp": 24,
        "at": 24,
        "df": 24,
        "sa": 24,
        "sd": 24,
        "sp": 24
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1347
    }
  },
  "Pinsir": {
    "Bug Catcher DAVIS": {
      "level": "27",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1044
    }
  },
  "Bellossom": {
    "Pkmn Ranger CATHERINE": {
      "level": "39",
      "ivs": {
        "hp": 10,
        "at": 10,
        "df": 10,
        "sa": 10,
        "sd": 10,
        "sp": 10
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1127
    }
  },
  "Dunsparce": {
    "Hiker MARC": {
      "level": "15",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 0
      },
      "item": "Oran Berry",
      "ability": "Serene Grace",
      "nature": "Docile",
      "teraType": null,
      "status": null,
      "moves": [
        "Headbutt",
        "Agility"
      ],
      "index": 1138
    }
  },
  "Wooloo": {
    "Hiker MARC": {
      "level": "14",
      "ivs": null,
      "item": "Chople Berry",
      "ability": "Fluffy",
      "nature": "Impish",
      "teraType": null,
      "status": null,
      "moves": [
        "Copycat",
        "Take Down",
        "Sleep Talk"
      ],
      "index": 1140
    }
  },
  "Espurr": {
    "Lass HALEY": {
      "level": "16",
      "ivs": null,
      "item": "Metronome",
      "ability": "Keen Eye",
      "nature": "Serious",
      "teraType": null,
      "status": null,
      "moves": [
        "Disarming VOice",
        "Confusion",
        "Fake Tears"
      ],
      "index": 1190
    }
  },
  "Pancham": {
    "Lass HALEY": {
      "level": "17",
      "ivs": null,
      "item": "Protective Pads",
      "ability": "Iron Fist",
      "nature": "Naughty",
      "teraType": null,
      "status": null,
      "moves": [
        "Pursuit",
        "Taunt",
        "Brick Break",
        "Ice Punch"
      ],
      "index": 1191
    }
  },
  "Grubbin": {
    "Bug Catcher LYLE": {
      "level": "16",
      "ivs": null,
      "item": "Focus Sash",
      "ability": "Swarm",
      "nature": "Quirky",
      "teraType": null,
      "status": null,
      "moves": [
        "Vise Grip",
        "Mud-Slap",
        "Pounce"
      ],
      "index": 1215
    }
  },
  "Parasect": {
    "Bug Catcher LYLE": {
      "level": "15",
      "ivs": null,
      "item": "Berry Juice",
      "ability": "Dry Skin",
      "nature": "Mild",
      "teraType": null,
      "status": null,
      "moves": [
        "Spore",
        "Aerial Ace",
        "Stun Spore",
        "Mega Drain"
      ],
      "index": 1216
    }
  },
  "Nincada": {
    "Bug Catcher JOSE": {
      "level": "8",
      "ivs": {
        "hp": 6,
        "at": 6,
        "df": 6,
        "sa": 6,
        "sd": 6,
        "sp": 6
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1218
    },
    "Bug Catcher DOUG": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1219
    },
    "Bug Catcher JAMES": {
      "level": "6",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1225
    },
    "Ninja Boy RILEY": {
      "level": "28",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Leech Life",
        "Fury Swipes",
        "Mind Reader",
        "Dig"
      ],
      "index": 1296
    }
  },
  "Volbeat": {
    "Bug Catcher GREG": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1221
    },
    "Young Couple KIRA & DAN & Young Couple KIRA & DAN": {
      "level": "36",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1283
    },
    "Young Couple KIRA & DAN & Beauty JOHANNA": {
      "level": "39",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1285
    },
    "Bug Maniac ANGELO": {
      "level": "17",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Shock Wave",
        "Quick Attack",
        "Confuse Ray"
      ],
      "index": 1708
    }
  },
  "Illumise": {
    "Bug Catcher GREG": {
      "level": "25",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1222
    },
    "Young Couple KIRA & DAN & Young Couple KIRA & DAN": {
      "level": "36",
      "ivs": {
        "hp": 3,
        "at": 3,
        "df": 3,
        "sa": 3,
        "sd": 3,
        "sp": 3
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1284
    },
    "Young Couple KIRA & DAN & Beauty JOHANNA": {
      "level": "39",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1286
    },
    "Bug Maniac ANGELO": {
      "level": "17",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Shock Wave",
        "Quick Attack",
        "Charm"
      ],
      "index": 1707
    }
  },
  "Nosepass": {
    "Hiker ALAN": {
      "level": "22",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1246
    },
    "Cooltrainer RUBEN": {
      "level": "34",
      "ivs": {
        "hp": 12,
        "at": 12,
        "df": 12,
        "sa": 12,
        "sd": 12,
        "sp": 12
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1359
    },
    "Leader ROXANNE & Leader ROXANNE": {
      "level": "52",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Double Team",
        "Explosion",
        "Protect",
        "Rock Slide"
      ],
      "index": 1558
    },
    "Ruin Maniac ANDRES": {
      "level": "37",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1731
    }
  },
  "Golem": {
    "Hiker TRENT": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1272
    },
    "Leader ROXANNE & Leader ROXANNE": {
      "level": "47",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Focus Punch",
        "Rollout",
        "Earthquake",
        "Explosion"
      ],
      "index": 1554
    },
    "Hiker SAWYER": {
      "level": "33",
      "ivs": {
        "hp": 4,
        "at": 4,
        "df": 4,
        "sa": 4,
        "sd": 4,
        "sp": 4
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1801
    }
  },
  "Poliwag": {
    "Fisherman DARIAN": {
      "level": "15",
      "ivs": null,
      "item": "Lum Berry",
      "ability": "Swift Swim",
      "nature": "Careful",
      "teraType": null,
      "status": null,
      "moves": [
        "Bubblebeam",
        "Hypnosis",
        "Mud Shot",
        "Rain Dance"
      ],
      "index": 1411
    },
    "Leader JUAN & Leader JUAN": {
      "level": "46",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hypnosis",
        "Rain Dance",
        "Protect",
        "Hydro Pump"
      ],
      "index": 1685
    }
  },
  "Kabuto": {
    "Leader ROXANNE & Leader ROXANNE": {
      "level": "35",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Swords Dance",
        "Ice Beam",
        "Surf",
        "Rock Slide"
      ],
      "index": 1540
    }
  },
  "Onix": {
    "Leader ROXANNE & Leader ROXANNE": {
      "level": "40",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Iron Tail",
        "Explosion",
        "Roar",
        "Rock Slide"
      ],
      "index": 1546
    }
  },
  "Omanyte": {
    "Leader ROXANNE & Leader ROXANNE": {
      "level": "37",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Protect",
        "Ice Beam",
        "Rock Slide",
        "Surf"
      ],
      "index": 1543
    }
  },
  "Kabutops": {
    "Leader ROXANNE & Leader ROXANNE": {
      "level": "50",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Swords Dance",
        "Ice Beam",
        "Surf",
        "Rock Slide"
      ],
      "index": 1556
    }
  },
  "Omastar": {
    "Leader ROXANNE & Leader ROXANNE": {
      "level": "47",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Protect",
        "Ice Beam",
        "Rock Slide",
        "Surf"
      ],
      "index": 1555
    }
  },
  "Aerodactyl": {
    "Leader ROXANNE & Leader ROXANNE": {
      "level": "47",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Rock Slide",
        "Hyper Beam",
        "Supersonic",
        "Protect"
      ],
      "index": 1553
    }
  },
  "Steelix": {
    "Leader ROXANNE & Leader ROXANNE": {
      "level": "50",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Iron Tail",
        "Explosion",
        "Roar",
        "Rock Slide"
      ],
      "index": 1557
    }
  },
  "Hitmontop": {
    "Leader BRAWLY & Leader BRAWLY": {
      "level": "50",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Pursuit",
        "Counter",
        "Protect",
        "Triple Kick"
      ],
      "index": 1576
    }
  },
  "Hitmonchan": {
    "Leader BRAWLY & Leader BRAWLY": {
      "level": "46",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Sky Uppercut",
        "Protect",
        "Fire Punch",
        "Ice Punch"
      ],
      "index": 1573
    }
  },
  "Hitmonlee": {
    "Leader BRAWLY & Leader BRAWLY": {
      "level": "46",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Mega Kick",
        "Focus Punch",
        "Earthquake",
        "Bulk Up"
      ],
      "index": 1572
    }
  },
  "Mareep": {
    "Leader WATTSON & Leader WATTSON": {
      "level": "36",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Protect",
        "Thunder Wave",
        "Light Screen"
      ],
      "index": 1578
    }
  },
  "Flaaffy": {
    "Leader WATTSON & Leader WATTSON": {
      "level": "41",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Protect",
        "Thunder Wave",
        "Light Screen"
      ],
      "index": 1583
    }
  },
  "Raichu": {
    "Leader WATTSON & Leader WATTSON": {
      "level": "51",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Slam",
        "Rain Dance",
        "Protect"
      ],
      "index": 1593
    }
  },
  "Ampharos": {
    "Leader WATTSON & Leader WATTSON": {
      "level": "51",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder",
        "Protect",
        "Thunder Wave",
        "Light Screen"
      ],
      "index": 1594
    }
  },
  "Electabuzz": {
    "Leader WATTSON & Leader WATTSON": {
      "level": "50",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Swift",
        "Focus Punch",
        "Thunder Punch",
        "Light Screen"
      ],
      "index": 1592
    }
  },
  "Ponyta": {
    "Leader FLANNERY & Leader FLANNERY": {
      "level": "41",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Flamethrower",
        "Attract",
        "Solar Beam",
        "Bounce"
      ],
      "index": 1604
    }
  },
  "Growlithe": {
    "Leader FLANNERY & Leader FLANNERY": {
      "level": "46",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Helping Hand",
        "Flamethrower",
        "Sunny Day",
        "Roar"
      ],
      "index": 1608
    }
  },
  "Houndour": {
    "Leader FLANNERY & Leader FLANNERY": {
      "level": "46",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Roar",
        "Solar Beam",
        "Taunt",
        "Sunny Day"
      ],
      "index": 1607
    }
  },
  "Arcanine": {
    "Leader FLANNERY & Leader FLANNERY": {
      "level": "51",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Helping Hand",
        "Flamethrower",
        "Sunny Day",
        "Roar"
      ],
      "index": 1613
    }
  },
  "Houndoom": {
    "Leader FLANNERY & Leader FLANNERY": {
      "level": "51",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Roar",
        "Solar Beam",
        "Taunt",
        "Sunny Day"
      ],
      "index": 1615
    }
  },
  "Rapidash": {
    "Leader FLANNERY & Leader FLANNERY": {
      "level": "51",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Flamethrower",
        "Attract",
        "Solar Beam",
        "Bounce"
      ],
      "index": 1616
    }
  },
  "Chansey": {
    "Leader NORMAN & Leader NORMAN": {
      "level": "47",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Light Screen",
        "Sing",
        "Skill Swap",
        "Focus Punch"
      ],
      "index": 1624
    }
  },
  "Kangaskhan": {
    "Leader NORMAN & Leader NORMAN": {
      "level": "55",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Fake Out",
        "Dizzy Punch",
        "Endure",
        "Reversal"
      ],
      "index": 1635
    }
  },
  "Blissey": {
    "Leader NORMAN & Leader NORMAN": {
      "level": "57",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Protect",
        "Sing",
        "Skill Swap",
        "Focus Punch"
      ],
      "index": 1634
    }
  },
  "Tauros": {
    "Leader NORMAN & Leader NORMAN": {
      "level": "57",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Take Down",
        "Protect",
        "Fire Blast",
        "Earthquake"
      ],
      "index": 1636
    }
  },
  "Dratini": {
    "Leader WINONA & Leader WINONA": {
      "level": "40",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder Wave",
        "Thunderbolt",
        "Protect",
        "Ice Beam"
      ],
      "index": 1639
    }
  },
  "Hoothoot": {
    "Leader WINONA & Leader WINONA": {
      "level": "43",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hypnosis",
        "Psychic",
        "Reflect",
        "Dream Eater"
      ],
      "index": 1644
    }
  },
  "Dragonair": {
    "Leader WINONA & Leader WINONA": {
      "level": "50",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Thunder Wave",
        "Thunderbolt",
        "Protect",
        "Ice Beam"
      ],
      "index": 1652
    }
  },
  "Noctowl": {
    "Leader WINONA & Leader WINONA": {
      "level": "53",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hypnosis",
        "Psychic",
        "Reflect",
        "Dream Eater"
      ],
      "index": 1656
    }
  },
  "Dragonite": {
    "Leader WINONA & Leader WINONA": {
      "level": "55",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hyper Beam",
        "Thunderbolt",
        "Earthquake",
        "Ice Beam"
      ],
      "index": 1659
    }
  },
  "Slowpoke": {
    "Leader TATE&LIZA & Leader TATE&LIZA": {
      "level": "58",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Yawn",
        "Psychic",
        "Calm Mind",
        "Protect"
      ],
      "index": 1675
    }
  },
  "Drowzee": {
    "Leader TATE&LIZA & Leader TATE&LIZA": {
      "level": "53",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hypnosis",
        "Dream Eater",
        "Headbutt",
        "Protect"
      ],
      "index": 1667
    }
  },
  "Hypno": {
    "Leader TATE&LIZA & Leader TATE&LIZA": {
      "level": "63",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hypnosis",
        "Dream Eater",
        "Headbutt",
        "Protect"
      ],
      "index": 1679
    }
  },
  "Slowking": {
    "Leader TATE&LIZA & Leader TATE&LIZA": {
      "level": "63",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Yawn",
        "Psychic",
        "Calm Mind",
        "Protect"
      ],
      "index": 1681
    }
  },
  "Poliwhirl": {
    "Leader JUAN & Leader JUAN": {
      "level": "56",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hypnosis",
        "Rain Dance",
        "Protect",
        "Hydro Pump"
      ],
      "index": 1697
    }
  },
  "Lapras": {
    "Leader JUAN & Leader JUAN": {
      "level": "61",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hydro Pump",
        "Perish Song",
        "Ice Beam",
        "Confuse Ray"
      ],
      "index": 1701
    }
  },
  "Politoed": {
    "Leader JUAN & Leader JUAN": {
      "level": "61",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Hypnosis",
        "Rain Dance",
        "Hydro Pump",
        "Perish Song"
      ],
      "index": 1703
    }
  },
  "Cradily": {
    "Rival STEVEN": {
      "level": "76",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Giga Drain",
        "Ancient Power",
        "Ingrain",
        "Confuse Ray"
      ],
      "index": 1713
    }
  },
  "Armaldo": {
    "Rival STEVEN": {
      "level": "76",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Water Pulse",
        "Ancient Power",
        "Aerial Ace",
        "Slash"
      ],
      "index": 1714
    }
  },
  "Metagross": {
    "Rival STEVEN": {
      "level": "78",
      "ivs": {
        "hp": 31,
        "at": 31,
        "df": 31,
        "sa": 31,
        "sd": 31,
        "sp": 31
      },
      "item": "Sitrus Berry",
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [
        "Earthquake",
        "Psychic",
        "Meteor Mash",
        "Shadow Ball"
      ],
      "index": 1715
    }
  },
  "Beldum": {
    "Salon Maiden ANABEL": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1716
    },
    "Dome Ace TUCKER": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1717
    },
    "Palace Maven SPENSER": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1718
    },
    "Arena Tycoon GRETA": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1719
    },
    "Factory Head NOLAND": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1720
    },
    "Pike Queen LUCY": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1721
    },
    "Pyramid King BRANDON": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1722
    }
  },
  "Chimecho": {
    "Psychic MARIELA": {
      "level": "41",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1837
    }
  },
  "Charmander": {
    "Rival RED": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1841
    }
  },
  "Bulbasaur": {
    "Rival LEAF": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1842
    }
  },
  "Groudon": {
    "RS Protag BRENDAN": {
      "level": "5",
      "ivs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 0,
        "sd": 0,
        "sp": 0
      },
      "item": null,
      "ability": null,
      "nature": null,
      "teraType": null,
      "status": null,
      "moves": [],
      "index": 1843
    }
  }
}
