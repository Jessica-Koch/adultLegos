'use strict';
var Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = 'amzn1.ask.skill.90e5ae75-0240-4037-a191-c4c5ff805256';

var SKILL_NAME = "Adult Legos";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

var data = [
    "A capacitor is something that stores energy; you can create a capacitor by separating two conducts with an insulator.",
    "A PCB or Printed Circuit Board, is a board that allows signals and power to be routed across physical devices.",
    "PCBs are like cakes, the layers are silkscreen, soldermask, copper and substrate.",
    "The PCB substrate, is usually fiberglass and is designated FR4.  For flexible PCB substrate, high-temperature plastic, known as Kapton is used.",
    "The Soldermask of the PCB lays on top of the copper foil, this is what gives the PCB its color. It insulates the copper and prevents accidental contact with other metals.",
    "The white silkscreen layer of a PCB is used to mark the soldermask.",
    "An annular ring is a ring of copper, on a PCB around a plated through hole.",
    "DRC or design rule check, is a check to make sure that your design is correct.",
    "A drill hit, is a marker on a PCB where a hole should be drilled or where holes were drilled on the board.",
    "A finger, is an exposed metal pad on a the edge of a PCB board used to create a connection between two boards."
    "Mouse bites are perforations on a PCB board so that it can easily be broken.",
    "PCB pads are exposed metal pieces on the board where components can be soldered.",
    "A panel is a larger circuit board composed of many smaller circuit boards.",
    "Pick and place is the machine or process that places components on a circuit board.",
    "A plane is a continuous block of copper on a circuit board.",
    "Plated through holes are holes on a PCB board with annular rings that are plated completely through the board.  These can be through connection point for a signal or for a through hole component to get attached.",
    "A pogo pin is is a spring loaded contact used to test connections during development.",
    "Reflow is the process of melting the solder to create joints between pads and component leads.",
    "A slot is any hole on a PCB board that isn't round.",
    "Solder paste are small balls of solder that are suspended in a gel medium.  With the help of a paste stencil, these are placed on surface mount pads of the PCB where components are to be placed.",
    "Solder jumpers are small blobs of solder that join two metal components that should be separate",
    "A surface mount component is a component that is attached, via solder, to a circuit board.",
    "Thermals are small traces used to connect pads to planes. These are used to heat up the pad through a process called relief.  This creates better soldered joints",
    "Traces are continuous paths of copper on a circuit board.",
    "A v-score is a perforated board allowing for a break along a line.",
    "Vias are holes in PCB boards used to pass a signal from one layer to another.",
    "A tented via is a via that is covered by a soldermask.",
    "A via where a component or connector is to be attached is typically uncovered to ease in soldering.",
    "Current is measured in amps.",
    "Voltage is measured in volts.",
    "Resistance is measured in ohms.",
    "Resistors are used to control voltages and current in a circuit.",
    "Current limiting resistors are used to reduce the current in a circuit.",
    "Current can be thought of as the flow of water through a river where voltage can be thought of as the speed at which the current flows.",
    "Capacitors can be thought of as batteries with a very low capacity.",
    "Capacitors are often used to insert a time delay in a current, reducing noise and stabilizing a voltage supply.",
    "Two most common types of capacitors are polarized and non-polarized",
    "Transistors are switches controlled by electrical signals. Transistors have more states than just 'On' and 'Off', which are determined by the current flowing through its base.",
    "Transistors are used to make amplifiers because a current running through its base can be increased by 100 times more powerful.",
    "Inductors are coils of wire.",
    "Integrated circuits are circuits shrunk to fit within a chip.",
    "A micro controller is a component that takes in signals and makes 'decisions' based upon those signals.  It reacts by emitting electrical signals.",
    "Microcontrollers get signals from sensors such as cameras or micorphones.",
    "Microcontrollers are controlled using code that is uploaded to a chip",
    "Microcontrollers come in 8-bit, 16-bit and 32-bit.",
    "Two types of 8-bit microcontrollers are PIC and AVR; PIC is a microchip.",
    "What differentiates different microcontrollers are the number of pins, memory available, and peripherals.",
    "Diodes are components that block current from flowing in one direction and conduct current flowing in another.",
    "Diodes are used in rectifier circuits to convert AC to DC and visa versa.",
    "Diodes are created by placing a negative and a positive semiconductor material together, the baheavior is different than either of the single conductors alone.",
    "The depletion layer is the layer between the anode and kathode of a diode which acts as an insulator.",
    "When a positive voltage is applied to the positive side of a diode, it flows through the diode to the negative side, because the depletion layer effectively disappears.  When this is reversed, the depletion layer expands.",
    "To get a diode to begin conducting, a certain amount of voltage is needed across it, usually 0.7V.  If too high of a current is passed in the 'wrong' direction, the depletion layer will break down and the diode will allow flow from this direction as well.",
    "Signal diodes are similar to rectifier diodes exept rectifier diodes are made to handle more power",
    "Zener diodes are made to have their depletion layer broken down and are used as stable voltage references.",
    "Integrated circuits are circuits built specifically to be placed in a chip, sometimes known as a microchip."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
