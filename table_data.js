//TODO: まずプリセットを埋めろ！
//      次はプリセットの、ドロップボックスを自動生成だ！


// テーブルデータ
const ID_COLUMN_NUM = 0;
const ORDER_COLUMN_NUM = 1;
const NAME_COLUMN_NUM = 2;
const RANGE_COLUMN_NUM = 3;
// 楽器データ
const WOOD_WINDS_ID_NUM = '100';
const PICCOLO_ID_NUM = '111';
const FLUTE_ID_NUM = '112';
const ALTO_FLUTE_in_G_ID_NUM = '113';
const BASS_FLUTE_ID_NUM = '114';
const OBOE_ID_NUM = '121';
const OBOE_DAMORE_ID_NUM = '122';
const ENGLISH_HORN_ID_NUM = '123';
const CLARINET_in_Eb_ID_NUM = '131';
const CLARINET_in_Bb_ID_NUM = '132';
const CLARINET_in_A_ID_NUM = '133';
const ALTO_CLARINET_in_Eb_ID_NUM = '134';
const ALTO_CLARINET_in_F_ID_NUM = '135';
const BASS_CLARINET_in_Bb_ID_NUM = '136';
const BASSET_HORN_in_F_ID_NUM = '137';
const BASSOON_ID_NUM = '141';
const DOUBLE_BASSOON_ID_NUM = '142';
const SOPRANINO_SAXOPHONE_in_Eb_ID_NUM = '151';
const SOPRANO_SAXOPHONE_in_Bb_ID_NUM = '152';
const ALTO_SAXOPHONE_in_Eb_ID_NUM = '153';
const TENOR_SAXOPHONE_in_Bb_ID_NUM = '154';
const BARITONE_SAXOPHONE_in_Eb_ID_NUM = '155';
const BASS_SAXOPHONE_in_Bb_ID_NUM = '156';

const BRASS_ID_NUM = '200';
const HORN_in_F_ID_NUM = '211';
const PICCOLO_TRUMPET_in_C_ID_NUM = '221';
const PICCOLO_TRUMPET_in_Bb_ID_NUM = '222';
const PICCOLO_TRUMPET_in_A_ID_NUM = '223';
const TRUMPET_in_C_ID_NUM = '224';
const TRUMPET_in_Bb_ID_NUM = '225';
const BASS_TRUMPET_in_C_ID_NUM = '226';
const TROMBONE_ID_NUM = '231';
const EUPHONIUM_ID_NUM = '232';
const TUBA_ID_NUM = '233';

const KEYBOARD_ID_NUM = '300';
const PIANO_ID_NUM = '311';

const STRINGS_ID_NUM = '400';
const VIOLIN_ID_NUM = '411';
const VIOLA_ID_NUM = '412';
const VIOLONCELLO_ID_NUM = '413';
const CONTRABASS_ID_NUM = '414';



//プリセット
const PRESETS = [
    {
        name: "ID",
        ids:
            [
                // WWs
                WOOD_WINDS_ID_NUM,
                PICCOLO_ID_NUM, FLUTE_ID_NUM, ALTO_FLUTE_in_G_ID_NUM, BASS_FLUTE_ID_NUM,
                OBOE_ID_NUM, OBOE_DAMORE_ID_NUM, ENGLISH_HORN_ID_NUM,
                CLARINET_in_Eb_ID_NUM, CLARINET_in_Bb_ID_NUM, CLARINET_in_A_ID_NUM,
                ALTO_CLARINET_in_Eb_ID_NUM, ALTO_CLARINET_in_F_ID_NUM,
                BASS_CLARINET_in_Bb_ID_NUM, BASSET_HORN_in_F_ID_NUM,
                BASSOON_ID_NUM, DOUBLE_BASSOON_ID_NUM,
                SOPRANINO_SAXOPHONE_in_Eb_ID_NUM, SOPRANO_SAXOPHONE_in_Bb_ID_NUM,
                ALTO_SAXOPHONE_in_Eb_ID_NUM, TENOR_SAXOPHONE_in_Bb_ID_NUM,
                BARITONE_SAXOPHONE_in_Eb_ID_NUM, BASS_SAXOPHONE_in_Bb_ID_NUM,
                // Brass
                BRASS_ID_NUM,
                HORN_in_F_ID_NUM,
                PICCOLO_TRUMPET_in_C_ID_NUM, PICCOLO_TRUMPET_in_Bb_ID_NUM, PICCOLO_TRUMPET_in_A_ID_NUM,
                TRUMPET_in_C_ID_NUM, TRUMPET_in_Bb_ID_NUM,
                BASS_TRUMPET_in_C_ID_NUM,
                TROMBONE_ID_NUM, EUPHONIUM_ID_NUM, TUBA_ID_NUM,
                // Keybord
                KEYBOARD_ID_NUM,
                PIANO_ID_NUM,
                // Strings
                STRINGS_ID_NUM,
                VIOLIN_ID_NUM, VIOLA_ID_NUM, VIOLONCELLO_ID_NUM, CONTRABASS_ID_NUM
            ]
    },
    {
        name: "register",
        ids:
            [
                // higher register instruments: 高音域の楽器
                PICCOLO_ID_NUM,
                FLUTE_ID_NUM,
                ALTO_FLUTE_in_G_ID_NUM,
                OBOE_ID_NUM,
                CLARINET_in_Eb_ID_NUM,
                CLARINET_in_Bb_ID_NUM,
                CLARINET_in_A_ID_NUM,
                SOPRANO_SAXOPHONE_in_Bb_ID_NUM,
                PICCOLO_TRUMPET_in_C_ID_NUM,
                PICCOLO_TRUMPET_in_Bb_ID_NUM,
                PICCOLO_TRUMPET_in_A_ID_NUM,
                TRUMPET_in_C_ID_NUM,
                TRUMPET_in_Bb_ID_NUM,
                VIOLIN_ID_NUM,


                // middle register instruments: 中音域の楽器
                BASS_FLUTE_ID_NUM,
                OBOE_DAMORE_ID_NUM, ENGLISH_HORN_ID_NUM,
                ALTO_CLARINET_in_Eb_ID_NUM,
                ALTO_CLARINET_in_F_ID_NUM,
                BASSET_HORN_in_F_ID_NUM,
                ALTO_SAXOPHONE_in_Eb_ID_NUM,
                TENOR_SAXOPHONE_in_Bb_ID_NUM,
                HORN_in_F_ID_NUM,
                BASS_TRUMPET_in_C_ID_NUM,
                VIOLA_ID_NUM,



                // lower register instruments: 低音域の楽器
                BASS_CLARINET_in_Bb_ID_NUM,
                BASSOON_ID_NUM,
                DOUBLE_BASSOON_ID_NUM,
                BARITONE_SAXOPHONE_in_Eb_ID_NUM,
                BASS_SAXOPHONE_in_Bb_ID_NUM,
                TROMBONE_ID_NUM,
                EUPHONIUM_ID_NUM,
                TUBA_ID_NUM,
                VIOLONCELLO_ID_NUM,
                CONTRABASS_ID_NUM,

                // other
                PIANO_ID_NUM
            ]
    }, {
        name: " - higher register instruments",
        ids:
            [
                // higher register instruments: 高音域の楽器
                PICCOLO_ID_NUM,
                FLUTE_ID_NUM,
                ALTO_FLUTE_in_G_ID_NUM,
                OBOE_ID_NUM,
                CLARINET_in_Eb_ID_NUM,
                CLARINET_in_Bb_ID_NUM,
                CLARINET_in_A_ID_NUM,
                SOPRANO_SAXOPHONE_in_Bb_ID_NUM,
                PICCOLO_TRUMPET_in_C_ID_NUM,
                PICCOLO_TRUMPET_in_Bb_ID_NUM,
                PICCOLO_TRUMPET_in_A_ID_NUM,
                TRUMPET_in_C_ID_NUM,
                TRUMPET_in_Bb_ID_NUM,
                VIOLIN_ID_NUM,
                // other
                PIANO_ID_NUM
            ]
    },
    {
        name: " - middle register instruments",
        ids:
            [
                // middle register instruments: 中音域の楽器
                BASS_FLUTE_ID_NUM,
                OBOE_DAMORE_ID_NUM, ENGLISH_HORN_ID_NUM,
                ALTO_CLARINET_in_Eb_ID_NUM,
                ALTO_CLARINET_in_F_ID_NUM,
                BASSET_HORN_in_F_ID_NUM,
                ALTO_SAXOPHONE_in_Eb_ID_NUM,
                TENOR_SAXOPHONE_in_Bb_ID_NUM,
                HORN_in_F_ID_NUM,
                BASS_TRUMPET_in_C_ID_NUM,
                VIOLA_ID_NUM,
                // other
                PIANO_ID_NUM,
            ]
    },
    {
        name: " - lower register instruments",
        ids:
            [
                // lower register instruments: 低音域の楽器
                BASS_CLARINET_in_Bb_ID_NUM,
                BASSOON_ID_NUM,
                DOUBLE_BASSOON_ID_NUM,
                BARITONE_SAXOPHONE_in_Eb_ID_NUM,
                BASS_SAXOPHONE_in_Bb_ID_NUM,
                TROMBONE_ID_NUM,
                EUPHONIUM_ID_NUM,
                TUBA_ID_NUM,
                VIOLONCELLO_ID_NUM,
                CONTRABASS_ID_NUM,

                // other
                PIANO_ID_NUM
            ]
    },

    {
        name: "Woodwinds",
        ids:
            [
                // WWs
                WOOD_WINDS_ID_NUM,
                // flute family
                PICCOLO_ID_NUM, FLUTE_ID_NUM, ALTO_FLUTE_in_G_ID_NUM, BASS_FLUTE_ID_NUM,
                // oboe family
                OBOE_ID_NUM, OBOE_DAMORE_ID_NUM, ENGLISH_HORN_ID_NUM,
                //clarinet family
                CLARINET_in_Eb_ID_NUM, CLARINET_in_Bb_ID_NUM, CLARINET_in_A_ID_NUM,
                ALTO_CLARINET_in_Eb_ID_NUM, ALTO_CLARINET_in_F_ID_NUM,
                BASS_CLARINET_in_Bb_ID_NUM, BASSET_HORN_in_F_ID_NUM,
                //basson family
                BASSOON_ID_NUM, DOUBLE_BASSOON_ID_NUM,
                //saxophone family
                SOPRANINO_SAXOPHONE_in_Eb_ID_NUM,
                SOPRANO_SAXOPHONE_in_Bb_ID_NUM,
                ALTO_SAXOPHONE_in_Eb_ID_NUM,
                TENOR_SAXOPHONE_in_Bb_ID_NUM,
                BARITONE_SAXOPHONE_in_Eb_ID_NUM,
                BASS_SAXOPHONE_in_Bb_ID_NUM
            ]
    },
    {
        name: " - Flute Family",
        ids: [PICCOLO_ID_NUM, FLUTE_ID_NUM, ALTO_FLUTE_in_G_ID_NUM, BASS_FLUTE_ID_NUM]
    }, {
        name: " - Oboe Family",
        ids: [OBOE_ID_NUM, OBOE_DAMORE_ID_NUM, ENGLISH_HORN_ID_NUM]
    }, {
        name: " - Clarinet Family",
        ids:
            [
                CLARINET_in_Eb_ID_NUM, CLARINET_in_Bb_ID_NUM, CLARINET_in_A_ID_NUM,
                ALTO_CLARINET_in_Eb_ID_NUM, ALTO_CLARINET_in_F_ID_NUM,
                BASS_CLARINET_in_Bb_ID_NUM,
                BASSET_HORN_in_F_ID_NUM
            ]
    }, {
        name: " - Bassoon Family",
        ids: [BASSOON_ID_NUM, DOUBLE_BASSOON_ID_NUM]
    }, {
        name: " - Saxophone Family",
        ids:
            [
                SOPRANINO_SAXOPHONE_in_Eb_ID_NUM,
                SOPRANO_SAXOPHONE_in_Bb_ID_NUM,
                ALTO_SAXOPHONE_in_Eb_ID_NUM,
                TENOR_SAXOPHONE_in_Bb_ID_NUM,
                BARITONE_SAXOPHONE_in_Eb_ID_NUM,
                BASS_SAXOPHONE_in_Bb_ID_NUM
            ]
    },

    {
        name: "Brass",
        ids:
            [
                BRASS_ID_NUM,
                HORN_in_F_ID_NUM,
                PICCOLO_TRUMPET_in_C_ID_NUM, PICCOLO_TRUMPET_in_Bb_ID_NUM, PICCOLO_TRUMPET_in_A_ID_NUM,
                TRUMPET_in_C_ID_NUM, TRUMPET_in_Bb_ID_NUM, BASS_TRUMPET_in_C_ID_NUM,
                TROMBONE_ID_NUM, EUPHONIUM_ID_NUM, TUBA_ID_NUM
            ]
    }, {
        name: " - Trumpet Family",
        ids:
            [
                PICCOLO_TRUMPET_in_C_ID_NUM, PICCOLO_TRUMPET_in_Bb_ID_NUM, PICCOLO_TRUMPET_in_A_ID_NUM,
                TRUMPET_in_C_ID_NUM, TRUMPET_in_Bb_ID_NUM, BASS_TRUMPET_in_C_ID_NUM
            ]
    }, {
        name: " - Trombone Family",
        ids:
            [
                TROMBONE_ID_NUM, EUPHONIUM_ID_NUM, TUBA_ID_NUM
            ]
    },
    {
        name: "Strings",
        ids:
            [
                STRINGS_ID_NUM,
                VIOLIN_ID_NUM, VIOLA_ID_NUM, VIOLONCELLO_ID_NUM, CONTRABASS_ID_NUM
            ]
    },
    {
        name: "Quartet",
        ids: ["999"]
    }, {

        name: " - Saxophone Quartet",
        ids:
            [
                SOPRANO_SAXOPHONE_in_Bb_ID_NUM,
                ALTO_SAXOPHONE_in_Eb_ID_NUM,
                TENOR_SAXOPHONE_in_Bb_ID_NUM,
                BARITONE_SAXOPHONE_in_Eb_ID_NUM
            ]
    }, {
        name: " - String Quartet",
        ids:
            [
                VIOLIN_ID_NUM, VIOLA_ID_NUM, VIOLONCELLO_ID_NUM
            ]
    }, {
        name: "Quintet",
        ids: ["999"]
    }, {
        name: " - Wind Quintet",
        ids:
            [
                FLUTE_ID_NUM, OBOE_ID_NUM, CLARINET_in_Bb_ID_NUM, HORN_in_F_ID_NUM, BASSOON_ID_NUM

            ]
    }, {
        name: " - Brass Quintet",
        ids:
            [
                TRUMPET_in_Bb_ID_NUM, HORN_in_F_ID_NUM, TROMBONE_ID_NUM, TUBA_ID_NUM
            ]
    }
];
