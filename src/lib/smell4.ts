function voteForPresident() {
  console.log('voting for president');
}

export function canVote() {
  const userAge = 19;
  const ageLimit = 18;

  userAge >= ageLimit && voteForPresident();
}

canVote();
