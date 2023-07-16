/**
 * Solution4
 *
 * This is (ab)using short-circuit evaluation.
 * But it’s hard to debug, and in many cases hard to find what
 * it actually does.
 */

function voteForPresident() {
  console.log('voting for president');
}

export function canVoteSolution() {
  const userAge = 19;
  const ageLimit = 18;

  if (userAge >= ageLimit) {
    voteForPresident();
  }
}

canVoteSolution();
