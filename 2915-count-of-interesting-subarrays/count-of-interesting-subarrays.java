class Solution {
    public long countInterestingSubarrays(List<Integer> nums, int modulo, int k) {
        long count=0,e=0;
        Map<Integer,Long> hm=new HashMap<>();
        hm.put(0,1L);
        for(int i:nums)
        {
            if(i%modulo==k)
            e++;
            int r=(int)(e%modulo);
            int n=(r-k+modulo)%modulo;
            count+=hm.getOrDefault(n,0L);
            hm.put(r,hm.getOrDefault(r,0L)+1);
        }
        return count;
    }
}