trigger ContactTrigger on Contact (before insert) {
	ContactTriggerHelper.ValidateTiers(Trigger.New);
}