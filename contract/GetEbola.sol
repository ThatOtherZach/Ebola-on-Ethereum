/* GetEbola Smart Contract, used to get the URL from the Etherum Blockchain to a Swarm file of the Ebola virus genome.
*/

pragma solidity ^0.4.17;

contract GetEbola {
    
    address private creator = msg.sender;
    string storedData;
    
    function getInfo() constant returns (string Creator, string Genome_Info)
    {
        string memory developer = "Saluton, mia nomo estas Zach!"; // Tio estas mia nomo :)
        string memory genomeInfo = "Ebola virus - Zaire, cat.1976"; // Ebola virus name and date genome was cataloged
        return (developer, genomeInfo);
    }
    
    function getEbola() constant returns (string URL)
    {
        // Returns URL, bit.ly link to swarm file at bzz:/0191e5bf83b4b172ac36921a4ba1ceab49ba6178fcc35404047c04e6e5e95771
        string memory genomeURL = "http://bit.ly/0x4554482b45626f6c61";
        return (genomeURL);
    }
    
    function tipCreator() constant returns (string, address)
    {
        string memory tipMsg = "If you like you can tip me at this address :)"; // Message to tipping person
        address tipJar = 0x0; // Address of my tip jar
        return (tipMsg, tipJar);
    }
    
    function set(string x) {
        storedData = x;
    }
    function get() constant returns (string) {
        return storedData;
    }
    
    /**********
     Standard kill() function to recover funds 
     **********/
    
    function kill() public
    { 
        if (msg.sender == creator)
        {
            suicide(creator);  // kills this contract and sends remaining funds back to creator
        }
    }
}
