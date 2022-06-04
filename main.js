const text = [
    `Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer.`,
    `What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. Were on a diplomatic mission. If this is a consular ship...were is the Ambassador? Commander, tear this ship apart until you've found those plans and bring me the Ambassador.`,
    `I wonder if he really cares about anything...or anyone. I care! So...what do you think of her, Han? I'm trying not to, kid! Good. Still, she's got a lot of spirit. I don't know, what do you think? Do you think a princess and a guy like me.`,
    `Look! Come on, Artoo, we're going! Now's our chance! Go! No! Come on! Come on! Luke, its too late! Blast the door! Kid! Run, Luke! Run! I hope the old man got that tractor beam out if commission, or this is going to be a real short trip. Okay, hit it! We're coming up on the sentry ships. Hold 'em off! Angle the deflector shields while I charge up the main guns! I can't believe he's gone. There wasn't anything you could have done.`,
    `In fact, I, uh, was also thinking about our agreement about my staying on another season. And if these new droids do work out, I want to transmit my application to the Academy this year. You mean the next semester before harvest? Sure, there're more than enough droids. Harvest is when I need you the most.`,
    `Come on! Oh! All this excitement has overrun the circuits of my counterpart here. If you don't mind, I'd like to take him down to maintenance. All right. Threepio! Come in, Threepio! Threepio! Get to the top! I can't Where could he be? Threepio! Threepio, will you come in? They aren't here! Something must have happened to them.`,
    `We will then crush the Rebellion with one swift stroke. It looks like Sandpeople did this, all right. Look, here are Gaffi sticks, Bantha tracks. It's just...I never heard of them hitting anything this big before. They didn't. But we are meant to think they did. These tracks are side by side.`,
    `As a matter of fact, I'm not even sure which planet I'm on. Well, if there's a bright center to the universe, you're on the planet that it's farthest from. I see, sir. Uh, you can call me Luke.`,
    `They must be delivered safely or other star systems will suffer the same fate as Alderaan. Your destiny lies along a different path than mine. The Force will be with you...always! Boy you said it, Chewie. Where did you dig up that old fossil? Ben is a great man.`,
    `Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi.`
  ]
  
  const form = document.querySelector(".lorem-form");
  const numofpara = document.getElementById("numofpara");
  const numofparaRange = document.getElementById("numofparaRange");
  const result = document.querySelector(".lorem-text");
  
  function syncParaNumbers(e) {
    const value = e.target.value;
    numofpara.value = value;
    numofparaRange.value = value;
  }
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    const value = parseInt(numofpara.value);
    let tempText = text.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
  })
  
  numofpara.addEventListener('input', syncParaNumbers)
  numofparaRange.addEventListener('input', syncParaNumbers)