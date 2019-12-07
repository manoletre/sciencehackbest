$(document).ready(() => {
    let state = 0;

    let states = {
        0: {
            st0: '#666155',
            st1: '#354c66',
            st2: '#44473d',
            st3: '#3a3d32',
            st4: '#695020',
            st5: '#5b7059',
            st6: '#4a6646',
            st7: '#374036',
            st8: '#415c3b',
            st9: '#475743',
            st10: '#535c22',
            st11: '#5c6318',
            st12: '#F15A24',
            st13: '#F7931E',
            st14: '#FCEE21'
        },
        1: {
            st0: '#858155',
            st1: '#406794',
            st2: '#5d644c',
            st3: '#474e34',
            st4: '#695020',
            st5: '#678664',
            st6: '#53794f',
            st7: '#485846',
            st8: '#4f7446',
            st9: '#475743',
            st10: '#707c2e',
            st11: '#737c20',
            st12: '#F15A24',
            st13: '#F7931E',
            st14: '#FCEE21',
        },
        2: {
            st0: '#738555',
            st1: '#4390bd',
            st2: '#607951',
            st3: '#587942',
            st4: '#695020',
            st5: '#679264',
            st6: '#558550',
            st7: '#53704f',
            st8: '#4b813d',
            st9: '#53774a',
            st10: '#64862c',
            st11: '#5f881e',
            st12: '#F15A24',
            st13: '#F7931E',
            st14: '#FCEE21',
        }
    }

    $('#letsclean').click(() => {
        state++;
        $('.st0').css('fill', states[state].st0);
        $('.st1').css('fill', states[state].st1);
        $('.st2').css('fill', states[state].st2);
        $('.st3').css('fill', states[state].st3);
        $('.st4').css('fill', states[state].st4);
        $('.st5').css('fill', states[state].st5);
        $('.st6').css('fill', states[state].st6);
        $('.st7').css('fill', states[state].st9);
        $('.st8').css('fill', states[state].st8);
        $('.st9').css('fill', states[state].st9);
        $('.st10').css('fill', states[state].st10);
        $('.st11').css('fill', states[state].st11);
        $('.st12').css('fill', states[state].st12);
        $('.st13').css('fill', states[state].st13);
    });
});